import ForumClient from "@/app/components/pages/forum-page-components/forum-client";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ forumName: string }>
}

export default async function ForumPage({ params }: Props) {
  const { forumName: rawForumName } = await params;
  const forumName = decodeURIComponent(rawForumName);
  const session = await getSession();

  if(!session) redirect("/sign-in");

  const userName = session.user.name
  const userId = session.user.id
  
  return (
    <div>
      <ForumClient forumName={forumName} userName={userName} userId={userId}/>
    </div>
  )
}
