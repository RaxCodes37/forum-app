import { Forum } from "@/utils/utils";
import NewPostForm from "./new-post-form";

interface Props {
  forumInfo: Forum[];
  userName: string;
  userId: string;
}

export default function ForumHeader({ forumInfo, userName, userId }: Props) {
  return (
    <div>
      {forumInfo.map((forum) => (
        <div key={forum.forumName} className="py-5">
          <h2 className="text-2xl font-bold">{forum.forumName}</h2>
          {forum.forumDescription === "" ? (
            <p className="italic text-[#8e8c8c] mt-2">
              This forum hasn't been given a description yet
            </p>
          ) : (
            <p className="mt-2 text-[#8e8c8c]">{forum.forumDescription}</p>
          )}
          <div className="flex justify-between p-5 text-[#8e8c8c]">
            <p>
              Member Count:{" "}
              <span className="text-[#d9d7d7]">{forum.forumUserCount}</span>
            </p>

            <p>
              Forum Creator:{" "}
              <span className="text-[#d9d7d7]">{forum.forumCreatorName}</span>
            </p>
          </div>

          <hr className="text-[#8e8c8c]" />

          <NewPostForm
            forumName={forum.forumName}
            userName={userName}
            userId={userId}
          />
        </div>
      ))}
    </div>
  );
}
