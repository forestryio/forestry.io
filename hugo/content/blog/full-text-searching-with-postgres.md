---
title: Full Text Searching with Postgres
description: Implementing full text search with postgres tsvector and proper indexes.
date: 2019-08-01T14:07:06-03:00
publishdate: 2019-08-01T14:07:06-03:00
expirydate: 2030-01-01T04:00:00.000+00:00
authors:
- Jordan Patterson
headline: ''
textline: ''
images:
- "/uploads/2019/08/steven-wright-mq8QogEBy00-unsplash.png"
photo_credit: Photo by Steven Wright on Unsplash
categories:
- Engineering
tags:
- postgres
- search
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: 
aliases: []
menu: []
draft: true

---
We use Postgres as our primary data store here at Forestry. We recently added better searching to section page lists and I thought I would share what we learned as well as some caveats we ran into while building it.

## The `tsvector` Type

Postgres has a data type called `tsvector` that is used for full text search. A `tsvector`  value merges different variants of the same word and removes duplicates to create a sorted list of distinct words called _lexemes_.

```sql
SELECT to_tsvector('pg_catalog.english', 'Never gonna give you up. Never gonna let you down');
-- 'give':3 'gonna':2,7 'let':8 'never':1,6
```

You can see that the word `gonna` and `never` were in the original lyrics twice but only in the `tsvector` once. Those numbers next to the _lexemes_ are their position in the original lyrics.

## Stop Words

Something else you might notice in the above example is that the words `you`, `up`, and `down` are missing from the result. The first argument passed to `to_tsvector` is the name of a dictionary to use. Each dictionary includes a list of /stop words/ that get excluded from the result. Different dictionaries have different stop words.

```sql
SELECT to_tsvector('pg_catalog.simple', 'Never gonna give you up. Never gonna let you down');
-- 'down':10 'give':3 'gonna':2,7 'let':8 'never':1,6 'up':5 'you':4,9
```

Here we are using the _simple_ dictionary which doesn’t include the stop words `you`, `up`, and `down`.
You can read more about dictionaries and stop words in the Postgres documentation ([PostgreSQL: Documentation: 11: 12.6. Dictionaries](https://www.postgresql.org/docs/11/textsearch-dictionaries.html)).

## Normalization

Postgres also normalizes different variants of the same word to one word. For example:

```sql
SELECT to_tsvector('pg_catalog.english', 'Your heart''s been aching but you''re too shy to say it');
-- 'ach':5 'heart':2 're':8 'say':12 'shi':10
```

You can see that the word `aching` is normalized to `ach` .

## Adding a Trigger

We added a `tsvector` column called `tsv` so that we can store and index the vectors instead of creating them on the fly. This obviously made for a much faster search experience.
To keep the `tsv` column up-to-date we created a trigger.

```sql
CREATE TRIGGER tsvectorupdate BEFORE INSERT OR UPDATE
ON pages FOR EACH ROW EXECUTE PROCEDURE
tsvector_update_trigger(
	tsv, 'pg_catalog.english', path, body, search_params
)
```

This tells Postgres that every time a row in the pages table is inserted or updated, also update the `tsv` column and use the `path`, `body` , and `search_params` columns to create the `tsvector`.

## `tsvector` Size Limit

One issue we hit almost immediately was that `tsvector` has a size limit of 1MB.

    PG::ProgramLimitExceeded: ERROR:  string is too long for tsvector (2466260 bytes, max 1048575 bytes)

To get around this we had to change our trigger to use a stored procedure that could truncate the input text to the appropriate length. Since 1MB is a lot of data we decided to only index the first 500KB.

```sql
CREATE OR REPLACE FUNCTION search_params_trigger() RETURNS trigger AS $$
  begin
    new.tsv := to_tsvector(
	    'pg_catalog.english', 
		substring(
		  coalesce(new.path,'') ||
		  coalesce(new.search_params,'') || 
		  coalesce(new.body,''), 
		  1, 500000
		)
	  );
    return new;
  end
  $$ LANGUAGE plpgsql;
```

```sql
CREATE TRIGGER tsvectorupdate BEFORE INSERT OR UPDATE
  ON pages FOR EACH ROW EXECUTE PROCEDURE search_params_trigger();
```

## Indexing

All that was left was to index the `tsv` column using a _gin_ index.

From the Postgres docs:

> GIN is designed for handling cases where the items to be indexed are composite values, and the queries to be handled by the index need to search for element values that appear within the composite items. For example, the items could be documents, and the queries could be searches for documents containing specific words.

Since we are indexing a column with composite values, a gin index is what we want.

```sql
CREATE INDEX index_pages_on_tsv ON pages USING gin (tsv);`
```

## Working with JSON

We make use of JSON and JSONB columns in Postgres and we are currently using Postgres 9.6 which doesn’t support creating tsvectors from json so we created the `search_params` column from our json column like this.

```sql
UPDATE pages AS p 
SET search_params = array_to_string(
  array(
    SELECT value 
    FROM pages, json_each_text(pages.params) 
    WHERE pages.id = p.id
  ), ' '
)
```

This strips the top level keys from a json object and concatenates the values all into one long string. It’s not perfect but it’s good enough.

## A Note on Rails

Our main application is built with Ruby on Rails so it is also worth noting that Rails does not support exporting triggers and stored procedures too `schema.rb`. We were already using `structure.sql` anyway so it wasn’t an issue for us. But if you need to switch you can do so in `application.rb` like this.

```ruby
config.active_record.schema_format = :sql
```

Happy searching!