"use client";

import Link from "next/link";
import AuthWindow from "../components/window";
import { useRouter } from "next/navigation";
import { useState, useActionState } from "react";
import { postSignup } from "@/src/app/signup/endpoint";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [userTaken, setUserTaken] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const [confirmPass, setConfirmPass] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleUsernameUpdate = (e: { target: HTMLInputElement }) => {
    setUsername((username) => e.target.value);
  };

  const handlePasswordUpdate = (e: { target: HTMLInputElement }) => {
    const newPass = e.target.value;
    setPassword(newPass);
  };

  const validatePassword = () => {
    const passRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    const valid = passRegex.test(password);
    setValidPassword(valid);
    return valid;
  };

  const handleConfirmPassUpdate = (e: { target: HTMLInputElement }) => {
    const newConfirm = e.target.value;
    setConfirmPass(newConfirm);
  };

  const checkPasswordsMatch = () => {
    const matching = password === confirmPass;
    setPasswordsMatch((passwordsMatch) => matching);
    return matching;
  };

  const validateInput = () => {
    const validPass = validatePassword();
    const passMatch = checkPasswordsMatch();
    return validPass && passMatch;
  };

  const submit = () => {
    if (!validateInput()) {
      return;
    }

    try {
      const res = postSignup(username, password);
      if (res.status === 200) {
        console.log("Sign up successful");
        router.push("/login");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AuthWindow pageType="signup">
        <form action={submit}>
          <label
            htmlFor="username"
            className="block text-sm font-bold mb-2 font-sans"
          >
            Username
          </label>
          <input
            id="username"
            className="shadow border rounded w-full py-2 px-3 focus:outline-none"
            value={username}
            onChange={handleUsernameUpdate}
            required
          />

          {userTaken && (
            <p className="text-red-500 text-xs italic font-mono">
              Username already in use. Input another username or login.
            </p>
          )}

          <label
            htmlFor="password"
            className="block text-sm font-bold mb-2 mt-3 font-sans"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="shadow border rounded w-full py-2 px-3 focus:outline-none"
            value={password}
            onChange={handlePasswordUpdate}
            required
          />

          {!validPassword && (
            <div className="text-red-500 text-xs italic font-mono">
              <p>Password must contain:</p>
              <ul className="ml-3">
                <li>At least 10 characters</li>
                <li>One uppercase character (A-Z)</li>
                <li>One lowercase character (a-z)</li>
                <li>One number (1-9)</li>
                <li>One special character (e.g. !,@,#,$,%,^,&,*,-)</li>
              </ul>
            </div>
          )}

          <label
            htmlFor="confirm-pass"
            className="block text-sm font-bold mb-2 mt-3 font-sans"
          >
            Confirm Password
          </label>
          <input
            id="confirm-pass"
            type="password"
            className="shadow border rounded w-full py-2 px-3 focus:outline-none"
            value={confirmPass}
            onChange={handleConfirmPassUpdate}
            required
          />

          {!passwordsMatch && (
            <p className="text-red-500 text-xs italic font-mono">
              Passwords must match
            </p>
          )}

          <input
            type="submit"
            className="bg-gray-600 hover:bg-gray-400 disabled:bg-gray-400 text-white font-bold h-12 mt-3 w-full rounded focus:shadow-outline"
            value="Create Account"
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
