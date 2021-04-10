#!/bin/zsh

psql -d blog -a -f tables/post.sql
psql -d blog -a -f populatedb.sql
