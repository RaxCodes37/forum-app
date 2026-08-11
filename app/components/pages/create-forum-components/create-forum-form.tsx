"use client";

import { socket } from "@/lib/socket-client";
import { createForum, Forum } from "@/utils/utils";
import { username } from "better-auth/plugins";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  userName: string;
  userId: string
}

export default function CreateForumForm({userName, userId}: Props) {
  const [forumName, setForumName] = useState<string>("");
  const [forumDescription, setForumDescription] = useState<string>("");
  const [newForum, setNewForum] = useState<Forum[]>([]);

  useEffect(() => {	
		return () => {
			socket.off("forum-created");
		}
	}, [])

  const createForumFunction = async(e: React.FormEvent) => {
    e.preventDefault();

    const data = { forumName, forumDescription, userId, userName };
    await createForum(forumName, forumDescription, userId, userName);
    socket.emit("forum-created", data);

    setForumDescription("");
    setForumName("");
  }

  return (
    <form action="" className="mt-8 w-80 flex flex-col items-center">
      <input type="text" className="w-full px-3 py-1 text-lg" placeholder="Forum Name" value={forumName} onChange={(e) => {setForumName(e.target.value)}} required/>

      <input type="text" placeholder="Forum Description (Optional)" className="w-full px-3 py-1 text-lg mt-3" value={forumDescription} onChange={(e) => {setForumDescription(e.target.value)}}/>
      <button className="w-[50%] px-3 py-2 mt-3 mb-2" onClick={createForumFunction}>
        Create
      </button>
    </form>
  );
}
