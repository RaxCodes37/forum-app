"use server"

import { db } from "@/app/src";
import { forums } from "@/auth-schema";

export interface Forum {
  forumName: string;
  forumDescription: string;
  forumCreatorName: string;
}

export const createForum = async (forumName: string, forumDescription: string, forumCreatorId: string, forumCreatorName: string) => {
  const newForum = await db.insert(forums).values({
    forumName,
    forumDescription,
    forumCreatorId,
    forumCreatorName,
  }).returning({
    forumName: forums.forumName,
    forumDescription: forums.forumDescription,
    forumCreatorName: forums.forumCreatorName,
  })

  return newForum as Forum[];
}