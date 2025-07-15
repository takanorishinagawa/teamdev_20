import Link from "next/link";
import Button from "../button/Button";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex h-16 items-center justify-end gap-6 bg-blue-100 pr-10 font-bold">
        {/* 参考（Naoya) */}
        <Button href="/login" variant="white" size="sm">
          Login
        </Button>
        {/* <Link
          href="/login"
          className="transform rounded-full border-2 border-blue-500 px-8 py-2 duration-300 hover:-translate-y-0.5 hover:bg-white"
        >
          <p className="text-blue-600">Login</p>
        </Link> */}

        {/* 参考（Naoya) */}
        <Button href="/signup" variant="DarkBlue" size="sm">
          Sign Up
        </Button>
        {/* <Link
          href="/signup"
          className="transform rounded-full bg-blue-500 px-8 py-2 duration-300 hover:-translate-y-0.5 hover:bg-blue-300"
        >
          <p className="text-white">Sign Up</p>
        </Link> */}
      </div>
    </header>
  );
}
