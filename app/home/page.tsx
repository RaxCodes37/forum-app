import HomeChat from "../components/pages/home-chat";
import HomeHeader from "../components/pages/home-header";
import SideBar from "../components/pages/navigation-bars/home-side-bar";

export default function Home() {
  return (
    <div>
      <SideBar/>
      <HomeHeader/>
      <HomeChat/>
    </div>
  )
}
