import { Forum } from "@/utils/utils";
import ForumHeader from "./forum-header";
import ForumPosts from "./forum-posts";

interface Props {
  forumInfo: Forum[]
}

export default function ForumContent({forumInfo}: Props) {
  return (
    <div id="container" className="w-150 text-center rounded-md min-h-screen h-fit">
      <ForumHeader forumInfo={forumInfo}/>

      <ForumPosts/>
    </div>
  )
}
