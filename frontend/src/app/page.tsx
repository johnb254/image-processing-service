"use client";

import { useRouter } from "next/navigation";

// TODO #n: after doing auth logic, redirect based on existing jwt token
export default function Home() {
  const router = useRouter();
  router.replace("./auth/");
  return <div></div>;
}
