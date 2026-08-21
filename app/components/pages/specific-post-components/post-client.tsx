"use client";

import { useEffect, useState } from "react";
import CommentDisplay from "./comments-display";
import PostDisplay from "./post-display";
import { Comments, getComments, getSpecificPost, Posts } from "@/utils/utils";
import NewCommentForm from "./new-comment-form";

interface Props {
  postId: string;
  userName: string;
  userId: string;
}

export default function PostClientComponent({ postId, userName, userId }: Props) {
  const [post, setPost] = useState<Posts[]>([]);
  const [comments, setComments] = useState<Comments[]>([]);

  useEffect(() => {
    const getPostInfo = async () => {
      setPost(await getSpecificPost(postId));
      setComments(await getComments(postId));
    };

    getPostInfo();
  }, []);

  return (
    <div className="flex justify-center">
      <div id="container" className="w-150 text-center rounded-md min-h-screen h-fit">
        <PostDisplay post={post} />

        <NewCommentForm postId={postId} userName={userName} userId={userId}/>
        <hr className="text-[#8e8c8c]"/>

        <CommentDisplay comments={comments} setComments={setComments} userName={userName} userId={userId}/>
      </div>
    </div>
  );
}
