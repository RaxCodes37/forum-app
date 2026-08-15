"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";
import React, { useState } from "react"
import { useRouter } from "next/navigation";

export default function HeaderForm() {
  const [forumName, setForumName] = useState<string>("");
  const router = useRouter();

  const goListForums = async (e:React.FormEvent) => {
    e.preventDefault();

    if (!forumName.trim()) return;
    router.push(`/searched-forums?q=${encodeURIComponent(forumName)}`);
    setForumName("")
  }

  return (
    <form onSubmit={goListForums} className="flex gap-4">
      <input type="text" placeholder="Search" className="h-10" value={forumName} onChange={(e) => {setForumName(e.target.value)}}/>

      <button type="submit" className="px-4 h-10">
        <FaMagnifyingGlass />
      </button>
    </form>
  );
}
