import { getSession } from "@/lib/auth";
import HomeChat from "../components/pages/home-chat";
import HomeHeader from "../components/pages/home-chat/home-header";
import SideBar from "../components/pages/navigation-bars/home-side-bar";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if(!session) redirect("/sign-in");

  const userName = session.user.name;
  const userId = session.user.id;

  return (
    <div>
      <SideBar userId={userId}/>
      <HomeHeader/>
      <HomeChat userName={userName} userId={userId}/>
    </div>
  )
}
