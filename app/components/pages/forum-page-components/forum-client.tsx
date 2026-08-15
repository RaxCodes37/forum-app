"use client";

import { Forum, getForum } from "@/utils/utils";
import { useEffect, useState } from "react";

interface Props {
  forumName: string
}

export default function ForumClient({forumName}: Props) {
  const [forum, setForum] = useState<Forum[]>([])

  console.log(forumName)

  useEffect(() => {
    const getForumInfo = async () => {
      setForum(await getForum(forumName))
    }

    getForumInfo()
  }, [])
  
  return (
    <div>
    
    </div>
  )
}
