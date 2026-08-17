"use client";

import { Forum, getForum } from "@/utils/utils";
import { useEffect, useState } from "react";
import ForumContent from "./forum-content";

interface Props {
  forumName: string
}

export default function ForumClient({forumName}: Props) {
  const [forum, setForum] = useState<Forum[]>([])

  useEffect(() => {
    const getForumInfo = async () => {
      setForum(await getForum(forumName))
    }

    getForumInfo()
  }, [])
  
  return (
    <div className="flex justify-center">
      <ForumContent forumInfo={forum}/>
    </div> 
  )
}
