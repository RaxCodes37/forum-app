"use client";

import { deleteReply, getReplies, Replies } from "@/utils/utils";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

interface Props {
  newReplyAdded: number;
  originalComment: string;
  userName: string;
}

export default function ReplyDisplay({
  newReplyAdded,
  originalComment,
  userName,
}: Props) {
  const [replies, setReplies] = useState<Replies[]>([]);

  useEffect(() => {
    const getAllReplies = async () => {
      setReplies(await getReplies(originalComment));
    };

    getAllReplies();
  }, [newReplyAdded]);

  const deleteReplyFunction =  async (replyId: string) => {
    event?.preventDefault();

    setReplies(replies.filter(r => r.replyId !== replyId))

    try {
      await deleteReply(replyId);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col mt-1 relative left-10 w-[90%]">
      {replies.map((reply) => (
        <div key={reply.replyId} className="mt-3">
          <p className="text-lg text-[#8e8c8c]">{reply.replyAuthorName}</p>
          <p>{reply.replyContent}</p>

          <div className="my-3">
            {reply.replyAuthorName === userName ? (
              <div>
                <button
                  className="p-1 danger-button w-7 h-7 flex justify-center"
                  onClick={() => deleteReplyFunction(reply.replyId)}
                >
                  <FaTrash />
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <hr className="my-2 text-[#8e8c8c]" />
        </div>
      ))}
    </div>
  );
}
