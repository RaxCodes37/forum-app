import { Comments, deleteComment } from "@/utils/utils";
import React from "react";
import { FaComment, FaTrash } from "react-icons/fa";

interface Props {
  comments: Comments[];
  setComments: React.Dispatch<React.SetStateAction<Comments[]>>;
  userName: string
}

export default function CommentDisplay({ comments, setComments, userName }: Props) {

  const deleteCommentFunction = async (commentId: string) => {
    event?.preventDefault();

    setComments(comments.filter(c => c.commentId !== commentId));

    try {
      await deleteComment(commentId)
    } catch (error) {
      console.error(error)
    }
  }

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
          </div>
          <hr className="text-[#8e8c8c] mt-5" />
        </div>
      ))}
    </div>
  );
}
