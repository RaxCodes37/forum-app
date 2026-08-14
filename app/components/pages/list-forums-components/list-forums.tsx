"use client"

import { SearchedForum, searchForum } from "@/utils/utils";
import { useEffect, useState } from "react";

interface Props {
  forumName: string
}

export default function ListForums({forumName}: Props) {
  const [searchedForums, setSearchedForums] = useState<SearchedForum[]>([]);

  useEffect(() => {
    const getForums = async() => {
      setSearchedForums(await searchForum(forumName));
    }
    getForums();
  }, []);

  console.log(searchedForums)

  return (
    <div>
      {searchedForums.map((forum) => (
        <div key={forum.forumId}>
          {forum.forumName}
          {forum.forumDescriptiom}
          {forum.forumCreatorName}
        </div>
      ))}    
    </div>
  )
}
