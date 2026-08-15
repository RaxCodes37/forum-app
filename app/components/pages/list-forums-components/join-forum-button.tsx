import { joinForum } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props {
  forumName: string
  newMemberName: string
  newMemberId: string
}

export default function JoinForumButton({forumName, newMemberName, newMemberId}: Props) {
  const router = useRouter();

  const joinForumFunction = async (e: React.FormEvent) => {
    e.preventDefault();

    await joinForum(forumName, newMemberName, newMemberId);
    router.push(`/forum/${forumName}`)
  }

  return (
    <button className='px-3 py-2' onClick={joinForumFunction}>
      Join
    </button>
  )
}
