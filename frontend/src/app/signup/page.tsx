"use client";

import Link from "next/link";
import AuthWindow from "../components/window";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleUsernameUpdate = (e: { target: HTMLInputElement }) => {
    setUsername((username) => e.target.value);
  };

  const handlePasswordUpdate = (e: { target: HTMLInputElement }) => {
    const newPass = e.target.value;
    setPassword(newPass);
    validatePassword(newPass);
  };

  const validatePassword = (pass: string) => {
    const passRegex = /^.+$/;
    setValidPassword(passRegex.test(password));
    return validPassword;
  };

  const handleConfirmPassUpdate = (e: { target: HTMLInputElement }) => {
    const newConfirm = e.target.value;
    setConfirmPass(newConfirm);
  };

  const checkPasswordsMatch = () => {
    setPasswordsMatch((passwordsMatch) => password === confirmPass);
    return passwordsMatch;
  };

  const validateInput = (
    username: string,
    password: string,
    confirmPass: string
  ) => {
    if (!validatePassword(password)) return false;
    if (!checkPasswordsMatch()) return false;
    return;
  };

  const submit = () => {
    if (!validateInput(username, password, confirmPass)) {
      return;
    }
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AuthWindow pageType="signup">
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
            onBlur={handleUsernameUpdate}
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
            onBlur={handlePasswordUpdate}
            required
          />

          <label
            htmlFor="confirm-pass"
            className="block text-sm font-bold mb-2 font-sans"
          >
            Confirm Password
          </label>
          <input
            id="confirm-pass"
            type="password"
            className="shadow border rounded w-full py-2 px-3 mb-6 focus:outline-none"
            onBlur={handleConfirmPassUpdate}
            required
          />

          <input
            type="submit"
            className="bg-gray-600 hover:bg-gray-400 text-white font-bold w-full py-2 px-4 mb-6 rounded focus:outline-none focus:shadow-outline"
            value="Create Account"
            onSubmit={submit}
          />
        </form>
      </AuthWindow>
      <h3 className="text-center text-sm pt-6">
        Already have an account?{" "}
        <Link
          href={"/login/"}
          className="text-blue-600 hover:text-blue-400 underline"
        >
          Login!
        </Link>
      </h3>
    </div>
  );
}
