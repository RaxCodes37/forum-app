import { Comments, deleteComment } from "@/utils/utils";
import React, { useState } from "react";
import { FaComment, FaTrash } from "react-icons/fa";
import ReplyForm from "./reply-form";
import ReplyDisplay from "./reply-display";

interface Props {
  comments: Comments[];
  setComments: React.Dispatch<React.SetStateAction<Comments[]>>;
  userName: string;
  userId: string
}

export default function CommentDisplay({
  comments,
  setComments,
  userName,
  userId
}: Props) {
  const [replyFormDisplay, setReplyFormDisplay] = useState<string>("hidden");
  const [newReplyAdded, setNewReplyAdded] = useState<number>(0)

  const deleteCommentFunction = async (commentId: string) => {
    event?.preventDefault();

    setComments(comments.filter((c) => c.commentId !== commentId));

    try {
      await deleteComment(commentId);
    } catch (error) {
      console.error(error);
    }
  };

  const showReplyForm = () => {
    if (replyFormDisplay === "hidden") {
      setReplyFormDisplay("block");
    } else {
      setReplyFormDisplay("hidden");
    }
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.commentId} className="pt-5">
          <div className="text-left px-5">
            <p className="text-[#8e8c8c] text-lg">
              {comment.commentAuthorName}
            </p>
            <p>{comment.commentContent}</p>

            <div className="flex mt-3 gap-3">
              <button
                className="p-1 w-7 h-7 flex justify-center"
                onClick={showReplyForm}
              >
                <FaComment />
              </button>

              {comment.commentAuthorName === userName ? (
                <div>
                  <button
                    className="p-1 danger-button w-7 h-7 flex justify-center"
                    onClick={() => deleteCommentFunction(comment.commentId)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={`${replyFormDisplay} mt-3`}>
              <ReplyForm userName={userName} userId={userId} originalComment={comment.commentId} setNewReplyAdded={setNewReplyAdded}/>
            </div>
            <div>
              <ReplyDisplay newReplyAdded={newReplyAdded} originalComment={comment.commentId} userName={userName}/>
            </div>
          </div>
          <hr className="text-[#8e8c8c] mt-5" />
        </div>
      ))}
    </div>
  );
}
