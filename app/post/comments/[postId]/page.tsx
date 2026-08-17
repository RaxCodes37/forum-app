import React from 'react'

type Props = {
  params: Promise<{ postId: string }>
}

export default async function page({params}: Props) {
  const { postId: rawPostId } = await params;
  const postId = decodeURIComponent(rawPostId);
  
  console.log(postId)

  return (
    <div>
      
    </div>
  )
}
