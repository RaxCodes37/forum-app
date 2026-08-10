"use client"

import { redirect } from "next/navigation";
import { RiUserSettingsFill } from "react-icons/ri";

interface Props {
  userId: string
}

export default function UserConfig({ userId }: Props) {

  const goToSettings = () => redirect(`/user-settings/${userId}`);

  return (
    <div>
      <button className="px-4 h-10 mt-1" onClick={goToSettings}>
        <RiUserSettingsFill />
      </button>
    </div>
  );
}
