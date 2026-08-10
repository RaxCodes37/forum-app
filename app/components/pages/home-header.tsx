"use server"

import { FaPlus } from "react-icons/fa";
import HeaderForm from "./home-header-components/form";
import UserConfig from "./home-header-components/user-config";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function HomeHeader() {
  const session = await getSession();

  if(!session) redirect("/sign-in");

  const userId = session.user.id

  return (
    <header className="flex mt-4">
      <div className="flex justify-end items-end gap-5 w-[60%]">
        <button className="px-4 h-10">
          <FaPlus />
        </button>

        <HeaderForm/>
      </div>

      <div className="flex items-end justify-end w-[30%]">
        <UserConfig userId={userId}/>
      </div>
    </header>
  );
}
