import ListForums from "@/app/components/pages/list-forums-components/list-forums";
import { SearchedForum } from "@/utils/utils";

type ListForumsParams = {
  params: Promise<{forumName: string}>
}

export default async function ListSearchedForums({params}: ListForumsParams) {
  const { forumName } = await params;

  return (
    <div>
      <ListForums forumName={forumName}/>
    </div>
  )
}
