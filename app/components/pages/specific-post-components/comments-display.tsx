import { Comments } from "@/utils/utils";

interface Props {
  comments: Comments[];
}

export default function CommentDisplay({ comments }: Props) {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.commentId} className="pt-5">
          <div className="text-left px-5">
            <p className="text-[#8e8c8c] text-lg">
              {comment.commentAuthorName}
            </p>
            <p>{comment.commentContent}</p>
          </div>
          <hr className="text-[#8e8c8c] mt-5" />
        </div>
      ))}
    </div>
  );
}
