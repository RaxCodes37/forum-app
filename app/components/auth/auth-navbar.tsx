import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <nav className="flex justify-center gap-20 py-5 rounded-b-lg animate-fade-down animate-ease-in-out" id="container">
        <Link href="/sign-in" className="hover:underline">
          <h2>Sign-In</h2>
        </Link>
        <Link href="/sign-up" className="hover:underline">
          <h2>Sign-Up</h2>
        </Link>
      </nav>
    </div>
  )
}
