"use client";

import { Forum, getForum } from "@/utils/utils";
import { useEffect, useState } from "react";
import ForumHeader from "./forum-header";
import ForumPosts from "./forum-posts";

interface Props {
  forumName: string;
}

export default function ForumClient({ forumName }: Props) {
  const [forum, setForum] = useState<Forum[]>([]);

  useEffect(() => {
    const getForumInfo = async () => {
      setForum(await getForum(forumName));
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

        <ForumPosts />
      </div>
    </div>
  );
}
