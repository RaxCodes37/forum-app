"use server";

import { db } from "@/app/src";
import { forums, messages } from "@/auth-schema";

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

export const joinForum = async () => {
  
}

export const getMessages = async () => {
  const displayMessages = await db
    .select({
      messageContent: messages.messageContent,
      messageCreatorName: messages.messageCreatorName
    })
    .from(messages)
    .limit(50);

  return displayMessages as Message[];
};

export const sendMessage = async (messageContent: string, messageCreatorName: string, messageCreatorId: string) => {
  await db
    .insert(messages)
    .values({
      messageContent,
      messageCreatorName,
      messageCreatorId,
    })
}