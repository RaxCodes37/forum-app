"use server";

import { db } from "@/app/src";
import {
  comments,
  forumMembers,
  forums,
  messages,
  posts,
  user,
} from "@/auth-schema";
import { and, eq, sql } from "drizzle-orm";

//Interfaces/structs

export interface Forum {
  forumName: string;
  forumDescription: string;
  forumCreatorName: string;
  forumUserCount: number;
}

export interface Message {
  messageContent: string;
  messageCreatorName: string;
}

export interface SearchedForum {
  forumId: string;
  forumName: string;
  forumDescriptiom: string;
  forumCreatorName: string;
}

export interface Posts {
  postId: string;
  postContent: string;
  postAuthorName: string;
  postedOn: string;
}

export interface Comments {
  commentId: string;
  commentContent: string;
  commentAuthorName: string;
  originalPost: string;
}

export interface SidebarForums {
  partOf: string;
}

//Forum related actions

export const createForum = async (
  forumName: string,
  forumDescription: string,
  forumCreatorId: string,
  forumCreatorName: string,
) => {
  await db.insert(forums).values({
    forumName,
    forumDescription,
    forumCreatorId,
    forumCreatorName,
  });

  await db.insert(forumMembers).values({
    partOf: forumName,
    memberName: forumCreatorName,
    memberId: forumCreatorId,
  });
};

export const joinForum = async (
  forumJoining: string,
  newMemberName: string,
  newMemberId: string,
) => {
  const joinedAlready = await db
    .select({
      partOf: forumMembers.memberName,
      newMemberName: forumMembers,
    })
    .from(forumMembers)
    .where(
      and(
        eq(forumMembers.partOf, forumJoining),
        eq(forumMembers.memberId, newMemberId),
      ),
    );

  if (joinedAlready.length > 0) return;

  await db.insert(forumMembers).values({
    partOf: forumJoining,
    memberName: newMemberName,
    memberId: newMemberId,
  });

  await db
    .update(forums)
    .set({
      userCount: sql`${forums.userCount} + 1`,
    })
    .where(eq(forums.forumName, forumJoining));
};

export const leaveForum = async (forumName: string, memberId: string) => {
  const userExists = await db.select({
    memberId: forumMembers 
  }).from(forumMembers).where(eq(forumMembers.memberId, memberId));

  if(userExists.length === 0) return;
  
  await db
    .update(forums)
    .set({ userCount: sql`${forums.userCount} - 1` })
    .where(eq(forums.forumName, forumName));

  await db
    .delete(forumMembers)
    .where(
      and(
        eq(forumMembers.partOf, forumName),
        eq(forumMembers.memberId, memberId),
      ),
    );
};

export const searchForum = async (forumName: string) => {
  const searchedForums = await db
    .select({
      forumId: forums.forumId,
      forumName: forums.forumName,
      forumDescriptiom: forums.forumDescription,
      forumCreatorName: forums.forumCreatorName,
    })
    .from(forums)
    .where(
      sql`to_tsvector(${forums.forumName}) @@ websearch_to_tsquery(${forumName})`,
    );

  return searchedForums as SearchedForum[];
};

export const getForum = async (forumName: string) => {
  const forum = await db
    .select({
      forumName: forums.forumName,
      forumDescription: forums.forumDescription,
      forumCreatorName: forums.forumCreatorName,
      forumUserCount: forums.userCount,
    })
    .from(forums)
    .where(eq(forums.forumName, forumName)); //Forum Name is unique so no need for id

  return forum as Forum[];
};

export const getJoinedForums = async (userId: string) => {
  const forumsUserIsAPartOf = await db
    .select({
      partOf: forumMembers.partOf,
    })
    .from(forumMembers)
    .where(eq(forumMembers.memberId, userId));

  return forumsUserIsAPartOf as SidebarForums[];
};

export const editForumDescription = async (
  forumName: string,
  newDescription: string,
) => {
  await db
    .update(forums)
    .set({
      forumDescription: newDescription,
    })
    .where(eq(forums.forumName, forumName));
};

//Global Chat related actions

export const getMessages = async () => {
  const displayMessages = await db
    .select({
      messageContent: messages.messageContent,
      messageCreatorName: messages.messageCreatorName,
    })
    .from(messages)
    .limit(50);

  return displayMessages as Message[];
};

export const sendMessage = async (
  messageContent: string,
  messageCreatorName: string,
  messageCreatorId: string,
) => {
  await db.insert(messages).values({
    messageContent,
    messageCreatorName,
    messageCreatorId,
  });
};

export const changeMessageColor = async (userId: string, newColor: string) => {
  await db
    .update(user)
    .set({
      messageColor: newColor,
    })
    .where(eq(user.id, userId))
    .returning({
      messageColor: user.messageColor,
    });
};

export const getMessageColor = async (userId: string) => {
  const newSetColor = await db
    .select({
      messageColor: user.messageColor,
    })
    .from(user)
    .limit(1)
    .where(eq(user.id, userId));

  return newSetColor[0].messageColor;
};

//Post related actions

export const createPost = async (
  postContent: string,
  postAuthorName: string,
  postAuthorId: string,
  postedOn: string,
) => {
  await db.insert(posts).values({
    postContent,
    postAuthorName,
    postAuthorId,
    postedOn,
  });
};

export const getPosts = async (postedOn: string) => {
  const forumPosts = await db
    .select()
    .from(posts)
    .where(eq(posts.postedOn, postedOn));

  return forumPosts as Posts[];
};

export const getSpecificPost = async (postId: string) => {
  const post = await db.select().from(posts).where(eq(posts.postId, postId));

  return post as Posts[];
};

export const deletePost = async (postId: string) => {
  await db.delete(posts).where(eq(posts.postId, postId));
};

//Comment related actions

export const createComment = async (
  commentContent: string,
  commentAuthorName: string,
  commentAuthorId: string,
  originalPost: string,
) => {
  await db.insert(comments).values({
    commentContent,
    commentAuthorName,
    commentAuthorId,
    originalPost,
  });
};

export const getComments = async (originalPost: string) => {
  const postComments = await db
    .select()
    .from(comments)
    .where(eq(comments.originalPost, originalPost));

  return postComments as Comments[];
};

export const deleteComment = async (commentId: string) => {
  await db.delete(comments).where(eq(comments.commentId, commentId));
};
