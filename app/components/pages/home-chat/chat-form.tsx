"use client"

import { FaArrowUp } from 'react-icons/fa';

export default function ChatForm() {
  return (
    <form action="" className="py-10 w-full flex justify-center gap-3">
      <input type="text" placeholder="Be nice!" className="h-10 w-[74%]"/>
      <button className="px-3">
        <FaArrowUp/>
      </button>
    </form>
  )
}
