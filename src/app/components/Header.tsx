import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <div className="bg-blue-100 h-16 flex justify-end items-center pr-10 font-bold">
        <Link
          href="/login"
          className="border-blue-500  border-2 rounded-full py-2 px-8 mr-6 hover:bg-white hover:-translate-y-0.5 transform  duration-300"
        >
          <p className="text-blue-600">Login</p>
        </Link>
        <Link
          href="/signup"
          className="bg-blue-500 rounded-full py-2 px-8 hover:bg-blue-300 hover:-translate-y-0.5 transform  duration-300"
        >
          <p className="text-white">Sign Up</p>
        </Link>
      </div>
    </header>
  );
}
