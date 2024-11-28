-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "mp_Portfolio" (
	"title" text,
	"description" text,
	"img" text,
	"Team" jsonb,
	"start" text,
	"end" text,
	"category" text,
	"screenshotOne" text,
	"screenshotTwo" text,
	"techUsed" jsonb,
	"related" jsonb
);
--> statement-breakpoint
ALTER TABLE "mp_Portfolio" ENABLE ROW LEVEL SECURITY;
*/