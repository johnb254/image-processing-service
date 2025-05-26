"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// TODO #n: after doing auth logic, redirect based on existing jwt token
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("./login/");
  });
}
