"use client";

import { SearchedForum, searchForum } from "@/utils/utils";
import { useEffect, useState } from "react";

interface Props {
  forumName: string;
}

export default function ListForums({ forumName }: Props) {
  const [searchedForums, setSearchedForums] = useState<SearchedForum[]>([]);

  useEffect(() => {
    const getForums = async () => {
      setSearchedForums(await searchForum(forumName));
    };
    getForums();
  }, []);

  return (
    <div >
      {searchedForums.map((forum) => (
        <div key={forum.forumId}>
          <div className="px-4 py-5 duration-300 hover:bg-[#292828] hover:scale-105"> 
            <h2 className="text-xl">
              {forum.forumName}{" "}
              <span className="text-[#8e8c8c]">
                {" "}
                - {forum.forumCreatorName}
              </span>
            </h2>

            <p className="mt-2 text-[#8e8c8c]">{forum.forumDescriptiom}</p>
          </div>

          <hr className="text-[#8e8c8c]"/>
        </div>
      ))}
    </div>
  );
}
