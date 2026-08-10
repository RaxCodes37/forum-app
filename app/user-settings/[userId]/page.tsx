import SignOutButton from "@/app/components/auth/sign-out-button";
import BackHome from "@/app/components/pages/user-settings-components/back-home-button";

type SettingsProps = {
  params: Promise<{ userId: string }>;
};

export default async function Settings({ params }: SettingsProps) {
  const userId = await params;

  return (
    <div className="flex justify-center">
      <div
        id="container"
        className="w-80 text-center rounded-md mt-40 h-60 py-4"
      >
        <header>
          <h2 className="text-2xl">Settings</h2>
        </header>

        <div className="flex flex-col items-center">
          <SignOutButton />

          <BackHome/>
        </div>
      </div>
    </div>
  );
}
