"use client";

import { createPost } from "@/utils/utils";
import React, { useState } from "react";

interface Props {
  forumName: string;
  userName: string;
  userId: string;
}

export default function NewPostForm({ forumName, userName, userId }: Props) {
  const [newPost, setNewPost] = useState<string>("");

  const createPostFunction = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPost.trim() !== "") {
      await createPost(newPost, userName, userId, forumName);
      //! Add socket.io here
      setNewPost("")
    }
  };

  return (
    <form onSubmit={createPostFunction} className="forum-post-form flex">
      <input
        type="text"
        placeholder="New Post"
        value={newPost}
        onChange={(e) => {
          setNewPost(e.target.value);
        }}
      />

      <button className="px-5" type="submit">
        Post
      </button>
    </form>
  );
}
