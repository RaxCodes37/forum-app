import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <nav className="flex justify-center gap-20 py-5 bg-[#7e5959] rounded-b-lg animate-fade-down animate-ease-in-out">
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
