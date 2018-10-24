| Key | Description | Type | Default |
| --- | --- | --- | --- |
| `type` | Type of content | `directory`,`document`,`heading`,`jekyll-pages`,`jekyll-posts` | `directory` |
| `label` | Text to display in Forestry menu | String | N/A |
| `path` | Path to folder from repository root (only applies to `directory` type) | String | N/A |
| `match` | Glob of files to match inside of path (only applies to `directory` type) | String (Fileglob) | `**/*` |
| `exclude` | Glob pattern of files to exclude (only applies to `directory` type) | String (Fileglob) | None |
| `create` | Restrictions on creating new content items | `all`, `documents`, `none` | `all` |
| `templates` | Control Which Front Matter Templates can be used in section | Array | All templates |
| `new_doc_ext` | File extension for new documents created in this section | String | Value of **New File Format** in Forestry Settings |
| `read_only` | Prevent content from being edited (only applies to `document` type) | Boolean | `false` |