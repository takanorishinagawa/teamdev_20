import Link from "next/link";
import Header from "../components/Header";

export default function page() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="w-1/3 text-center ">
          <h1 className="text-4xl font-bold mt-40 mb-10">Sign Up</h1>
          <div className="text-left mx-16">
            <label className="text-xl pl-3 font-bold">Name</label>
            <input
              type="text"
              className="bg-gray-100 text-xl shadow-md rounded-xl py-3 pl-3 w-full mt-3 mb-5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your name"
            />
            <label className="text-xl pl-3 font-bold">Email</label>
            <input
              type="text"
              className="bg-gray-100 text-xl shadow-md rounded-xl py-3 pl-3 w-full mt-3 mb-5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your email"
            />
            <label className="text-xl pl-3 font-bold">Password</label>
            <input
              type="password"
              className="bg-gray-100 text-xl shadow-md rounded-xl py-3 pl-3 w-full mt-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-sky-500 font-bold text-white rounded-full mt-10 py-3 px-10 text-xl shadow-md hover:bg-sky-300 hover:-translate-y-1 transform  duration-300">
            Sign Up
          </button>
          <div className="flex justify-center mt-4 font-bold space-x-3">
            <p className="">Already have an account?</p>
            <Link href="/login">
              <p className="text-sky-500 hover:text-sky-300">Login</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
