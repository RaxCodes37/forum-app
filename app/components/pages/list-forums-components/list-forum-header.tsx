"use client";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { redirect } from "next/navigation";

interface Props {
  forumName: string;
}

export default function ListForumHeader({ forumName }: Props) {
  const goBackHome = () => redirect(`/home`);

  return (
    <div className="text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl py-3">Results for: "{forumName}"</h1>

        <button
          onClick={goBackHome}
          className="px-2 py-1 mt-1 mb-2 w-20 flex justify-center items-center text-lg gap-2"
        >
          <IoArrowBackCircleOutline />
          Back
        </button>
      </div>

      <hr className="my-1 text-[#8e8c8c]" />
    </div>
  );
}
