"use server";

import { db } from "@/app/src";
import { forums, messages, user } from "@/auth-schema";
import { eq } from "drizzle-orm";

export interface Forum {
  forumName: string;
  forumDescription: string;
  forumCreatorName: string;
}

export interface Message {
  messageContent: string;
  messageCreatorName: string;
}

export const createForum = async (
  forumName: string,
  forumDescription: string,
  forumCreatorId: string,
  forumCreatorName: string,
) => {
  const newForum = await db
    .insert(forums)
    .values({
      forumName,
      forumDescription,
      forumCreatorId,
      forumCreatorName,
    })
    .returning({
      forumName: forums.forumName,
      forumDescription: forums.forumDescription,
      forumCreatorName: forums.forumCreatorName,
    });

  return newForum as Forum[];
};

export const joinForum = async () => {};

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
