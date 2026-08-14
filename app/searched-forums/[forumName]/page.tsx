import ListForumHeader from "@/app/components/pages/list-forums-components/list-forum-header";
import ListForums from "@/app/components/pages/list-forums-components/list-forums";

type ListForumsParams = {
  params: Promise<{ forumName: string }>;
};

export default async function ListSearchedForums({ params }: ListForumsParams) {
  const { forumName } = await params;

  return (
    <div className="flex flex-col items-center">
      <div className="w-150 h-screen flex flex-col rounded-md" id="container">
        <ListForumHeader forumName={forumName}/>
        <ListForums forumName={forumName} />
      </div>
    </div>
  );
}
