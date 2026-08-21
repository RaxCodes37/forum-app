"use client"
import { createReply } from "@/utils/utils";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

interface Props {
  userName: string;
  userId: string;
  originalComment: string;
  setNewReplyAdded: React.Dispatch<React.SetStateAction<number>>;
}

export default function ReplyForm({userName, userId, originalComment, setNewReplyAdded}: Props) {
  const [reply, setReply] = useState<string>("");

  const postReplyFunction = async(e: React.FormEvent) => {
    e.preventDefault();

    if(reply.trim() !== ""){
      try {
       await createReply(reply, userName, userId, originalComment)

        setNewReplyAdded((prev) => prev + 1);
        setReply("");
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <form className="flex gap-3" onSubmit={postReplyFunction}>
      <input type="text" placeholder="Reply" value={reply} onChange={(e) => {setReply(e.target.value)}} className="w-full h-10" />
      <button className="px-3">
        <FaArrowUp/>
      </button>
    </form>
  );
}
