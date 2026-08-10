import { FaPlus } from "react-icons/fa";
import HeaderForm from "./home-header-components/form";
import UserConfig from "./home-header-components/user-config";

export default function HomeHeader() {
  return (
    <header className="flex mt-4">
      <div className="flex justify-end items-end gap-5 w-[60%]">
        <button className="px-4 h-10">
          <FaPlus />
        </button>

        <HeaderForm/>
      </div>

      <div className="flex items-end justify-end w-[30%]">
        <UserConfig/>
      </div>
    </header>
  );
}
