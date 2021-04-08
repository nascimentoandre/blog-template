create table posts (
  id bigserial not null primary key,
  title varchar(255) not null,
  content text default '...',
  tags text[],
  created_at timestamp default now()
)
