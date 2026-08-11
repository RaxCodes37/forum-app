"use client"

import { redirect } from "next/navigation";
import { FaPlus } from "react-icons/fa";

export default function NewForumButton() {
  const goCreateForum = () => redirect("/create-forum")

  return (
    <button className="px-4 h-10" onClick={goCreateForum}>
      <FaPlus />
    </button>
  );
}
