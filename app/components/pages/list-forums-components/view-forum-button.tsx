import { redirect } from 'next/navigation';

interface Props {
  forumName: string
}

export default function ViewForumButton({forumName}: Props) {
  const goViewForum = async () => redirect(`/foum/${forumName}`); //Not working yet

  return (
    <button className='px-3 py-2' onClick={goViewForum}>
      View
    </button>
  )
}
