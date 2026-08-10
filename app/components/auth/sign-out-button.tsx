"use client";

import { signOutAction } from '@/app/api/actions';

export default function SignOutButton() {
	const signOut = async() => await signOutAction()
	
	return (
		<button onClick={signOut} >		
			Sign-Out
		</button>
	)
}