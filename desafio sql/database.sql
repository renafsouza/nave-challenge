CREATE DATABASE challenge_development; 
DROP TABLE IF EXISTS "Comments";
CREATE TABLE "public"."Comments" (
    "id" integer NOT NULL AUTO_INCREMENT,
    "post_id" integer NOT NULL,
    "message" character varying(255) NOT NULL,
    "author" character varying(255) NOT NULL,
    "created_at" timestamptz NOT NULL,
    "updated_at" timestamptz NOT NULL,
    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Comments_post_id_fkey" FOREIGN KEY (post_id) REFERENCES "Posts"(id) ON DELETE CASCADE NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "Posts";
CREATE TABLE "public"."Posts" (
    "id" integer NOT NULL AUTO_INCREMENT,
    "author" character varying(255) NOT NULL,
    "title" character varying(255) NOT NULL,
    "text" character varying(255) NOT NULL,
    "created_at" timestamptz NOT NULL,
    "updated_at" timestamptz NOT NULL,
    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
) WITH (oids = false);
