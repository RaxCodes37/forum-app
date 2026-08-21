ALTER TABLE "replies" DROP CONSTRAINT "replies_original_post_posts_post_id_fk";
--> statement-breakpoint
ALTER TABLE "replies" DROP COLUMN "original_post";