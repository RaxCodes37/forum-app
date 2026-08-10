"use client";

import { FaGithub } from "react-icons/fa"
import { authClient } from "@/lib/client"
 
export default function SignInButton() {
	const signInWithGitHub = async () => await authClient.signIn.social({
		callbackURL: "/",
		provider: "github",
	})

	return (
		<div>
			<button onClick={signInWithGitHub} className="flex py-1 w-full justify-center items-center gap-2">
				<FaGithub/>
				Sign In with GitHub
			</button>
		</div>
	)
}