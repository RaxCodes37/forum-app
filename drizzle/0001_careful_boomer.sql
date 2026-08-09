CREATE TABLE "forums" (
	"forum_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"forum_name" varchar NOT NULL,
	"creator_name" varchar NOT NULL,
	"creator_id" varchar NOT NULL,
	CONSTRAINT "forums_forum_name_unique" UNIQUE("forum_name")
);
--> statement-breakpoint
CREATE TABLE "posts" (
	"post_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"post_content" varchar(255) NOT NULL,
	"post_author_name" text NOT NULL,
	"post_author_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "replies" (
	"reply_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"reply_content" varchar(255) NOT NULL,
	"reply_author_name" text NOT NULL,
	"reply_author_id" text NOT NULL,
	"original_post" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "forums" ADD CONSTRAINT "forums_creator_name_user_name_fk" FOREIGN KEY ("creator_name") REFERENCES "public"."user"("name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "forums" ADD CONSTRAINT "forums_creator_id_user_id_fk" FOREIGN KEY ("creator_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_post_author_name_user_name_fk" FOREIGN KEY ("post_author_name") REFERENCES "public"."user"("name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_post_author_id_user_id_fk" FOREIGN KEY ("post_author_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "replies" ADD CONSTRAINT "replies_reply_author_name_user_name_fk" FOREIGN KEY ("reply_author_name") REFERENCES "public"."user"("name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "replies" ADD CONSTRAINT "replies_reply_author_id_user_id_fk" FOREIGN KEY ("reply_author_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "replies" ADD CONSTRAINT "replies_original_post_posts_post_id_fk" FOREIGN KEY ("original_post") REFERENCES "public"."posts"("post_id") ON DELETE no action ON UPDATE no action;