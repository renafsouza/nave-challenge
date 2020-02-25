INSERT INTO "Posts" ("id", "author", "title", "text", "created_at", "updated_at") VALUES
(1,	'autor001',	'titulo001',	'texto001',	'2020-02-24 19:01:11.268-03',	'2020-02-24 19:01:11.27-03'),
(2,	'autor002',	'titulo002',	'texto002',	'2020-02-24 19:01:19.381-03',	'2020-02-24 19:01:19.382-03');

INSERT INTO "Posts" ("id", "author", "title", "text", "created_at", "updated_at") VALUES
(1,	'autor001',	'titulo001',	'texto001',	'2020-02-24 19:01:11.268-03',	'2020-02-24 19:01:11.27-03'),
(2,	'autor002',	'titulo002',	'texto002',	'2020-02-24 19:01:19.381-03',	'2020-02-24 19:01:19.382-03');

INSERT INTO "Comments" ("id", "post_id", "message", "author", "created_at", "updated_at") VALUES
(2,	1,	'message002',	'autor002',	'2020-02-24 19:01:34.933-03',	'2020-02-24 19:01:34.933-03'),
(1,	1,	'message001',	'autor001',	'2020-02-24 19:01:45.041-03',	'2020-02-24 19:01:45.042-03');
