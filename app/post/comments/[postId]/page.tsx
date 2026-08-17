import PostClientComponent from '@/app/components/pages/specific-post-components/post-client';
import React from 'react'

type Props = {
  params: Promise<{ postId: string }>
}

export default async function page({params}: Props) {
  const { postId: rawPostId } = await params;
  const postId = decodeURIComponent(rawPostId);

  return (
    <div>
      <PostClientComponent postId={postId}/>
    </div>
  )
}
