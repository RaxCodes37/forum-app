"use client"

import { redirect } from "next/navigation";
import { RiUserSettingsFill } from "react-icons/ri";

export default function UserConfig() {

  const goToSettings = () => redirect(`/user-settings`);

  return (
    <div>
      <button className="px-4 h-10 mt-1" onClick={goToSettings}>
        <RiUserSettingsFill />
      </button>
    </div>
  );
}
