"use client";

import { createComment } from "@/utils/utils";
import { useState } from "react";

interface Props {
  postId: string;
  userName: string;
  userId: string
}

export default function NewCommentForm({postId, userName, userId}: Props) {
  const [newComment, setNewComment] = useState<string>("");

  const createCommentFunction = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newComment.trim() !== "") {
      await createComment(newComment, userName, userId, postId);
      //! Add socket.io here
      setNewComment("")
    }
  };

  return (
    <form onSubmit={createCommentFunction} className="forum-post-form flex">
      <input
        type="text"
        placeholder="New Comment"
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      />

      <button className="px-5" type="submit">
        Post
      </button>
    </form>
  );
}
