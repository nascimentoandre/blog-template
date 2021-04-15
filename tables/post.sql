create table posts (
  id bigserial not null primary key,
  title varchar(70) not null,
  descript varchar(200),
  content text,
  tags varchar(20)[],
  created_at timestamp default now()
)
