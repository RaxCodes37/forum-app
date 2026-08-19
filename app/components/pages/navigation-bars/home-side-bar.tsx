"use client";

import { getJoinedForums, SidebarForums } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  userId: string;
}

export default function SideBar({ userId }: Props) {
  const [joinedForums, setJoinedForums] = useState<SidebarForums[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getInfo = async () => {
      setJoinedForums(await getJoinedForums(userId));
    };

    getInfo();
  }, []);

  const goToForum = async (forumName: string) => {
    router.push(`/forum/${encodeURIComponent(forumName)}`);
  };

  return (
    <div
      className="fixed w-60 h-full text-center rounded-r-lg animate-fade-right animate-ease-in-out"
      id="container"
    >
      <h2 className="p-2 mt-3 text-xl font-bold">Your Forums</h2>

      <hr className="my-3 text-[#8e8c8c]" />

      <div>
        {joinedForums.length !== 0 ? (
          <div>
            {joinedForums.map((forum) => (
              <div
                key={forum.partOf}
                className="p-1 hover:underline cursor-pointer"
                onClick={() => goToForum(forum.partOf)}
              >
                <p className="text-lg">{forum.partOf}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-lg text-[#8e8c8c] italic">No forums yet...</p>
          </div>
        )}
      </div>
    </div>
  );
}
