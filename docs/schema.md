# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
image_url   | string    | not null
description | text      | not null
funding_goal| integer   | not null
creator_id  | integer   | not null, foreign key (references users), indexed

## backings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects), indexed
backer_id   | integer   | not null, foreign key (references users), indexed
amount      | integer   | not null
message     | string    |


## rewards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      | not null
backing_id  | integer   | not null, foreign key (references backings), indexed
backer_id   | integer   | not null, foreign key (references users), indexed


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references project), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
