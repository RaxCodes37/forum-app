"use client";

import { deletePost, Posts } from "@/utils/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { FaComment, FaTrash } from "react-icons/fa6";

interface Props {
  posts: Posts[];
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>
  userName: string;
}

export default function ForumPosts({ posts, setPosts, userName }: Props) {
  const router = useRouter();

  const goToPostComments = (postId: string) =>
    router.push(`/post/comments/${encodeURIComponent(postId)}`);

  const deletePostFunction = async (postId: string) => {
    event?.preventDefault();

    setPosts(posts.filter(p => p.postId !== postId));
    
    try {
      await deletePost(postId);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.postId} className="mt-5">
          <div className="text-left px-5">
            <p className="text-[#8e8c8c] text-lg">{post.postAuthorName}</p>
            <p>{post.postContent}</p>

            <div className="flex mt-3 gap-3">
              <button
                className="p-1 w-7 h-7 flex justify-center"
                onClick={() => goToPostComments(post.postId)}
              >
                <FaComment />
              </button>

              {post.postAuthorName === userName ? (
                <div>
                  <button
                    className="p-1 danger-button w-7 h-7 flex justify-center"
                    onClick={() => deletePostFunction(post.postId)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <hr className="mt-5 text-[#8e8c8c]" />
        </div>
      ))}
    </div>
  );
}
