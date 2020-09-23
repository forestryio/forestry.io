---
title: Working with Globs
date: 2018-11-13 00:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
weight: 5
menu:
  guides:
    parent: Miscellaneous
    weight: 21

---
Certain configuration values in Forestry, such as the [sidebar `match` and `exclude` parameters,](/docs/settings/content-sections/) accept what is known as a _glob_. A glob is a string of characters that follows a special syntax, used to match paths in a file tree.

## Basic Syntax

- `?` matches a single character
- `*` matches any number of characters.
- `[abc]` matches any one character in the given set
- `[a-z]` matches a range.
- `{foo,bar}` matches any whole word in the given set

## Globstar

Two asterisks in sequence (`**`) is known as a **globstar** and will match 0 or more subdirectories in the path.

For example, the pattern `/content/**/index.md` matches all of the following:

- `/content/index.md`
- `/content/posts/index.md`
- `/content/authors/index.md`
- `/content/products/clothing/index.md`


## Practical Examples

The following are examples of some patterns you might use in your sidebar configuration's `match` or `exclude` field.

| Pattern | Matches |
| --- | --- |
| <span style="white-space:nowrap;"> `/data/*.json` </span> | All JSON files in the `data` directory |
| <span style="white-space:nowrap;"> `/data/**/*.json` </span> | All JSON files in the `data` directory and any subdirectories |
| <span style="white-space:nowrap;"> `**/*.{yaml,yml,json,toml}` </span> | All JSON, YAML, or TOML files in the entire project |
| <span style="white-space:nowrap;"> `{/foo.json,/data/bar.toml}` </span> | Only `/foo.json` and `/data/bar.toml`  |

## Further Reading

- [Wikipedia: Glob](https://en.wikipedia.org/wiki/Glob_(programming))