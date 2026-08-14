import SignOutButton from "@/app/components/auth/sign-out-button";
import BackHome from "@/app/components/pages/user-settings-components/back-home-button";
import ChangeUserColor from "@/app/components/pages/user-settings-components/change-username-color";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

type SettingsProps = {
  params: Promise<{ userId: string }>;
};

export default async function Settings({ params }: SettingsProps) {
  const session = await getSession();

  if (!session) redirect("/sign-in");

  const userId = session.user.id;

  return (
    <div className="flex justify-center">
      <div
        id="container"
        className="w-80 text-center rounded-md mt-40 py-4 animate-fade-up animate-ease-in-out h-fit"
      >
        <header>
          <h2 className="text-2xl">Settings</h2>
        </header>

        <div className="flex flex-col items-center">
          <ChangeUserColor userId={userId} />

          <BackHome />
          
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
