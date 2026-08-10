"use client";

import { redirect } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function BackHome() {
  const goBackHome = () => redirect(`/home`);

  return (
    <button
      onClick={goBackHome}
      className="px-2 py-1 mt-5 w-30 flex justify-center items-center text-lg gap-2"
    >
      <IoArrowBackCircleOutline />
      Back
    </button>
  );
}
