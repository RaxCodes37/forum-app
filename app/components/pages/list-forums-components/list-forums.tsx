"use client";

import { SearchedForum, searchForum } from "@/utils/utils";
import { useEffect, useState } from "react";
import ViewForumButton from "./view-forum-button";
import JoinForumButton from "./join-forum-button";

interface Props {
  forumName: string;
  userName: string;
  userId: string;
}

export default function ListForums({ forumName, userName, userId }: Props) {
  const [searchedForums, setSearchedForums] = useState<SearchedForum[]>([]);

  useEffect(() => {
    const getForums = async () => {
      setSearchedForums(await searchForum(forumName));
    };
    getForums();
  }, []);

  return (
    <div>
      {searchedForums.map((forum) => (
        <div key={forum.forumId}>
          <div className="px-4 py-5 duration-300 hover:bg-[#292828] hover:scale-105 flex justify-between items-center">
            <div>
              <h2 className="text-xl">
                {forum.forumName}{" "}
                <span className="text-[#8e8c8c]">
                  {" "}
                  - {forum.forumCreatorName}
                </span>
              </h2>

              {forum.forumDescriptiom === "" ? (
                <p className="italic text-[#8e8c8c] mt-2">
                  No description provided
                </p>
              ) : (
                <p className="mt-2 text-[#8e8c8c]">{forum.forumDescriptiom}</p>
              )}
            </div>

            <div className="flex gap-3">
              <ViewForumButton forumName={forum.forumName} />
              <JoinForumButton
                forumName={forum.forumName}
                newMemberName={userName}
                newMemberId={userId}
              />
            </div>
          </div>

          <hr className="text-[#8e8c8c]" />
        </div>
      ))}
    </div>
  );
}
