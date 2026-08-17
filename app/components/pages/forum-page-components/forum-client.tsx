"use client";

import { Forum, getForum, getPosts, Posts } from "@/utils/utils";
import { useEffect, useState } from "react";
import ForumHeader from "./forum-header";
import ForumPosts from "./forum-posts";

interface Props {
  forumName: string;
}

export default function ForumClient({ forumName }: Props) {
  const [forum, setForum] = useState<Forum[]>([]);
  const [posts, setPosts] = useState<Posts[]>([])

  useEffect(() => {
    const getForumInfo = async () => {
      setForum(await getForum(forumName));
      setPosts(await getPosts(forumName));
    };

    getForumInfo();
  }, []);

  return (
    <div className="flex justify-center">
      <div
        id="container"
        className="w-150 text-center rounded-md min-h-screen h-fit"
      >
        <ForumHeader forumInfo={forum} />

        <ForumPosts posts={posts}/>
      </div>
    </div>
  );
}
