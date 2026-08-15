import ForumClient from "@/app/components/pages/forum-page-components/forum-client";

type Props = {
  params: Promise<{ forumName: string }>
}

export default async function ForumPage({ params }: Props) {
  const { forumName: rawForumName } = await params;
  const forumName = decodeURIComponent(rawForumName);
  
  return (
    <div>
      <ForumClient forumName={forumName}/>
    </div>
  )
}
