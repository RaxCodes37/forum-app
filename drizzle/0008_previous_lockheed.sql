CREATE TABLE "comments" (
	"comment_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"comment_content" varchar(255) NOT NULL,
	"comment_author_name" text NOT NULL,
	"comment_author_id" text NOT NULL,
	"original_post" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "replies" ADD COLUMN "original_comment" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_comment_author_name_user_name_fk" FOREIGN KEY ("comment_author_name") REFERENCES "public"."user"("name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_comment_author_id_user_id_fk" FOREIGN KEY ("comment_author_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_original_post_posts_post_id_fk" FOREIGN KEY ("original_post") REFERENCES "public"."posts"("post_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "replies" ADD CONSTRAINT "replies_original_comment_comments_comment_id_fk" FOREIGN KEY ("original_comment") REFERENCES "public"."comments"("comment_id") ON DELETE no action ON UPDATE no action;