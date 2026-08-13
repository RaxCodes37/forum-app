"use client";

import { signOutAction } from '@/app/api/actions';

export default function SignOutButton() {
	const signOut = async() => await signOutAction()
	
	return (
		<button onClick={signOut} className="px-2 py-1 mt-5 danger-button w-50">		
			Sign-Out
		</button>
	)
}