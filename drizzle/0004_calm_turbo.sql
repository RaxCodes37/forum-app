CREATE TABLE "forum_members" (
	"membership_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"forum" varchar,
	"member_name" text,
	"member_id" text
);
--> statement-breakpoint
ALTER TABLE "forums" ADD COLUMN "user_count" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "forum_members" ADD CONSTRAINT "forum_members_forum_forums_forum_name_fk" FOREIGN KEY ("forum") REFERENCES "public"."forums"("forum_name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "forum_members" ADD CONSTRAINT "forum_members_member_name_user_name_fk" FOREIGN KEY ("member_name") REFERENCES "public"."user"("name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "forum_members" ADD CONSTRAINT "forum_members_member_id_user_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;