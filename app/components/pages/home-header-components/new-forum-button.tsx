"use client"

import { redirect } from "next/navigation";
import { FaPlus } from "react-icons/fa";

export default function NewForumButton() {
  return (
    <button className="px-4 h-10" onClick={redirect("/create-board")}>
      <FaPlus />
    </button>
  );
}
