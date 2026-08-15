import ListForumHeader from "@/app/components/pages/list-forums-components/list-forum-header";
import ListForums from "@/app/components/pages/list-forums-components/list-forums";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

type ListForumsParams = {
  params: Promise<{ forumName: string }>;
};

export default async function ListSearchedForums({ params }: ListForumsParams) {
  const { forumName } = await params;
  const session = await getSession();
  
  if(!session) redirect("/sign-in");

  const userName = session.user.name;
  const userId = session.user.id;

  return (
    <div className="flex flex-col items-center">
      <div className="w-150 h-screen flex flex-col rounded-md" id="container">
        <ListForumHeader forumName={forumName}/>
        <ListForums forumName={forumName} userName={userName} userId={userId}/>
      </div>
    </div>
  );
}
