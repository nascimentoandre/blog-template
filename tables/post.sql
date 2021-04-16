create table posts (
  id bigserial not null primary key,
  title varchar(70) not null,
  slug varchar(100) not null unique,
  descript varchar(200),
  content text,
  sanitized_html text,
  tags varchar(20)[],
  created_at timestamp default now()
)
