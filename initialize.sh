#!/bin/zsh

psql -d blog -a -f tables/post.sql
