import { getSession } from "@/lib/auth";
import CreateForumForm from "../components/pages/create-forum-components/create-forum-form";
import { redirect } from "next/navigation";
import BackHome from "../components/pages/user-settings-components/back-home-button";

export default async function CreateForum() {
  const session = await getSession();

  if (!session) redirect("/sign-in");

  const userName = session.user.name;
  const userId = session.user.id;

  return (
    <div className="flex justify-center mt-40">
      <div
        id="container"
        className="flex flex-col items-center p-4 rounded-md w-80 2xl:w-150 animate-fade-up animate-ease-in-out"
      >
        <h1 className="text-2xl font-bold">Create New Forum</h1>

        <CreateForumForm userName={userName} userId={userId} />

        <div className="mt-1">
          <BackHome />
        </div>
      </div>
    </div>
  );
}
