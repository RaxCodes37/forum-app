import { Posts } from "@/utils/utils";
import { FaComment } from "react-icons/fa6";

interface Props {
  posts: Posts[];
}

export default function ForumPosts({ posts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.postId}>
          <div className="text-left px-5">
            <p className="text-[#8e8c8c] text-lg">{post.postAuthorName}</p>
            <p>{post.postContent}</p>

            <div className="flex mt-3">
              <button className="p-1">
                <FaComment/>
              </button>
            </div>
          </div>

          <hr className="mt-5 text-[#8e8c8c]"/>
        </div>
      ))}
    </div>
  );
}
