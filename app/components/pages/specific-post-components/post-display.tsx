"use client";

import { Posts } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";

interface Props {
  post: Posts[];
}

export default function PostDisplay({ post }: Props) {
  const router = useRouter();

  return (
    <div>
      {post.map((post) => (
        <div key={post.postId} className="pt-5">
          <div className="flex justify-between px-5">
            <div className="text-left">
              <p className="text-[#8e8c8c] text-lg">{post.postAuthorName}</p>
              <p>{post.postContent}</p>
            </div>

            <button
              onClick={() => router.back()}
              className="px-2 py-1 mt-5 w-20 flex justify-center items-center text-lg gap-2"
            >
              <IoArrowBackCircleOutline />
              Back
            </button>
          </div>
          <hr className="text-[#8e8c8c] mt-5" />
        </div>
      ))}
    </div>
  );
}
