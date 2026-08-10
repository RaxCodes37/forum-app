"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";

export default function HeaderForm() {
  return (
    <form action="" className="flex gap-4">
      <input type="text" placeholder="Search" className="h-10"/>

      <button className="px-4 h-10">
        <FaMagnifyingGlass />
      </button>
    </form>
  );
}
