"use client";

import { Posts } from "@/utils/utils";

interface Props {
  post: Posts[];
}

export default function PostDisplay({ post }: Props) {
  return (
    <div>
      {post.map((post) => (
        <div key={post.postId} className="pt-5">
          <div className="text-left px-5">
            <p className="text-[#8e8c8c] text-lg">{post.postAuthorName}</p>
            <p>{post.postContent}</p>
          </div>
          <hr className="text-[#8e8c8c] mt-5" />
        </div>
      ))}
    </div>
  );
}
