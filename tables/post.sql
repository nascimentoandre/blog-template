create table posts (
  id bigserial not null primary key,
  title varchar(100) not null,
  description varchar(150),
  content text default '...',
  tags text[],
  created_at timestamp default now()
)
