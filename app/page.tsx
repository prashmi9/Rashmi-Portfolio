"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Only works client-side, not server-side
    if (window.location.href.includes("react")) {
      router.push("/react");
    } else if (window.location.href.includes("ux")) {
      router.push("/ux");
    } else {
      router.push("/ux");
    }
  }, []);

  return <p>Loading...</p>;
}
