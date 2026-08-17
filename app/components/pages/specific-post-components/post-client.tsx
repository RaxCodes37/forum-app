"use client"

import CommentDisplay from "./comments-display";
import PostDisplay from "./post-display";

interface Props {
  postId: string
}

export default function PostClientComponent({ postId }: Props) {
  return (
    <div>
      <PostDisplay/>

      <CommentDisplay/>
    </div>
  )
}
