import { editForumDescription, Forum } from "@/utils/utils";
import NewPostForm from "./new-post-form";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

interface Props {
  forumInfo: Forum[];
  userName: string;
  userId: string;
}

export default function ForumHeader({ forumInfo, userName, userId }: Props) {
  const [showEditButton, setShowEditButton] = useState<string>("block");
  const [showEditForm, setShowEditForm] = useState<string>("hidden");
  const [newDescription, setNewDescription] = useState<string>("");

  const showOrHideEdit = () => {
    if (showEditButton === "block") {
      setShowEditButton("hidden");
      setShowEditForm("block");
    } else {
      setShowEditForm("hidden");
      setShowEditButton("block");
    }
  };

  const editDescriptionFunction = async (forumName: string) => {
    event?.preventDefault();

    if (newDescription.trim() !== "") {
      await editForumDescription(forumName, newDescription);

      location.reload();
    }
  };

  return (
    <div>
      {forumInfo.map((forum) => (
        <div key={forum.forumName} className="pt-5">
          <h2 className="text-2xl font-bold">{forum.forumName}</h2>
          {forum.forumDescription === "" ? (
            <div>
              {forum.forumCreatorName === userName ? (
                <div className="flex justify-center">
                  <p className="italic text-[#8e8c8c] mt-2">
                    This forum hasn't been given a description yet
                  </p>
                </div>
              ) : (
                <p className="italic text-[#8e8c8c] mt-2">
                  This forum hasn't been given a description yet
                </p>
              )}
            </div>
          ) : (
            <div>
              {forum.forumCreatorName === userName ? (
                <div className="flex flex-col items-center">
                  <div
                    className={`flex flex-col items-center ${showEditButton}`}
                  >
                    <p className="mt-2 text-[#8e8c8c]">
                      {forum.forumDescription}
                    </p>
                    <button className="p-2 mt-3" onClick={showOrHideEdit}>
                      <FiEdit />
                    </button>
                  </div>

                  <div
                    className={`flex justify-center items-end gap-2 ${showEditForm}`}
                  >
                    <form
                      className="mt-4 flex justify-center gap-2"
                      onSubmit={() => editDescriptionFunction(forum.forumName)}
                    >
                      <input
                        type="text"
                        placeholder={`${forum.forumDescription}`}
                        value={newDescription}
                        onChange={(e) => {
                          setNewDescription(e.target.value);
                        }}
                      />
                      <button type="submit" className="p-2">
                        <FaArrowUp />
                      </button>
                    </form>

                    <button
                      className="p-2 danger-button"
                      onClick={showOrHideEdit}
                    >
                      <FaX />
                    </button>
                  </div>
                </div>
              ) : (
                <p className="mt-2 text-[#8e8c8c]">{forum.forumDescription}</p>
              )}
            </div>
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
          <hr className="text-[#8e8c8c]" />
        </div>
      ))}
    </div>
  );
}
