import { redirect, useRouter } from 'next/navigation';

interface Props {
  forumName: string
}

export default function ViewForumButton({forumName}: Props) {
  const router = useRouter();

  const goViewForum = () => {
    router.push(`/forum/${encodeURIComponent(forumName)}`);
  };

  return (
    <button className='px-3 py-2' onClick={goViewForum}>
      View
    </button>
  )
}
