import Link from "next/link";
import AuthWindow from "../components/window";

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AuthWindow pageType="login">
        <form>
          <label
            htmlFor="username"
            className="block text-sm font-bold mb-2 font-sans"
          >
            Username
          </label>
          <input
            id="username"
            className="shadow border rounded w-full py-2 px-3 mb-4 focus:outline-none"
            required
          />

          <label
            htmlFor="password"
            className="block text-sm font-bold mb-2 font-sans"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="shadow border rounded w-full py-2 px-3 mb-6 focus:outline-none"
            required
          />

          <input
            type="submit"
            className="bg-gray-600 hover:bg-gray-400 text-white font-bold w-full py-2 px-4 mb-6 rounded focus:outline-none focus:shadow-outline"
            value="Login"
          />
        </form>
      </AuthWindow>
      <h3 className="text-center text-sm pt-6">
        Don't have an account?{" "}
        <Link
          href={"/signup/"}
          className="text-blue-600 hover:text-blue-400 underline"
        >
          Sign up!
        </Link>
      </h3>
    </div>
  );
}
