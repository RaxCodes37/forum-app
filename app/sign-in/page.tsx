import { signInAction } from "../api/actions";
import SignInButton from "../components/auth/sign-in-button";
import NavBar from "../components/auth/auth-navbar";

export default function SignInPage() {
  return (
    <div>
      <NavBar/>

      <div className="flex flex-col items-center mt-20">
        <h1 className="text-2xl">Sign In</h1>

        <form action={signInAction} className="flex flex-col gap-3 px-6 py-8 border rounded-md mt-5" id="container">
          <input type="text" name="email" placeholder="Email" required className="py-1"/>
          <input type="password" name="password" placeholder="Password" required className="py-1"/>

          <button type="submit" className="py-1">Sign In</button>

          <hr className="text-[#504c4c] my-3"/>

          <SignInButton/>
        </form>
      </div>
    </div>
  );
}
