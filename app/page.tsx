import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default function Home() {
  const headersList = headers();
  const path = headersList.get("x-invoke-path") || "";

  if (path.includes("ang")) {
    redirect("/ang");
  } else if (path.includes("react")) {
    redirect("/react");
  } else if (path.includes("ux")) {
    redirect("/ux");
  }

  redirect("/ang");
}
