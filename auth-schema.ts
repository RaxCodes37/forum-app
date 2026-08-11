import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, index, varchar, uuid } from "drizzle-orm/pg-core";
import { FaCommentSlash } from "react-icons/fa";

export const posts = pgTable("posts", {
  postId: uuid("post_id").primaryKey().defaultRandom(),
  postContent: varchar("post_content", {length: 255}).notNull(),
  postAuthorName: text("post_author_name").references(() => user.name).notNull(),
  postAuthorId: text("post_author_id").references(() => user.id).notNull(),
})

export const forums = pgTable("forums", {
  forum_id: uuid("forum_id").primaryKey().defaultRandom(),
  forumName: varchar("forum_name").unique().notNull(),
  forumDescription: varchar("forum_description", {length: 400}),
  forumCreatorName: varchar("creator_name").references(() => user.name).notNull(),
  forumCreatorId: varchar("creator_id").references(() => user.id).notNull(),
  //To user count I need to add the forum_members table and I will do that later
})

export const replies = pgTable("replies", {
  replyId: uuid("reply_id").primaryKey().defaultRandom(),
  replyContent: varchar("reply_content", {length: 255}).notNull(),
  replyAuthorName: text("reply_author_name").references(() => user.name).notNull(),
  replyAuthorId: text("reply_author_id").references(() => user.id).notNull(),
  originalPost: uuid("original_post").references(() => posts.postId).notNull()
})

export const messages = pgTable("messages", {
  messageId: uuid("message_id").primaryKey().defaultRandom(),
  messageContent: varchar("message_content").notNull(),
  messageCreatorName: varchar("creator_name").references(() => user.name).notNull(),
  messageCreatorId: varchar("creator_id").references(() => user.id).notNull(),
})

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
  posts: many(posts),
  replies: many(replies),
  messages: many(messages)
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const forumRelations = relations(forums, ({many}) => ({
  members: many(user),
  posts: many(posts),
  replies: many(replies),
}))

export const postRelations = relations(posts, ({one, many}) => ({
  creator: one(user, {
    fields: [posts.postAuthorName, posts.postAuthorId],
    references: [user.name, user.id],
  }),
  replies: many(replies)
}))

export const repliesRelations = relations(replies, ({one}) => ({
  creator: one(user, {
    fields: [replies.replyAuthorName, replies.replyAuthorId],
    references: [user.name, user.id],
  }),
}))