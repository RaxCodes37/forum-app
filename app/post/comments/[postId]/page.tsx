import PostClientComponent from '@/app/components/pages/specific-post-components/post-client';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {
  params: Promise<{ postId: string }>
}

export default async function page({params}: Props) {
  const { postId: rawPostId } = await params;
  const postId = decodeURIComponent(rawPostId);
  const session = await getSession();

  if(!session) redirect("/sign-in");

  const userName = session.user.name
  const userId = session.user.id

  return (
    <div>
      <PostClientComponent postId={postId} userName={userName} userId={userId}/>
    </div>
  )
}
