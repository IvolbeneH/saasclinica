import { SignOutButton } from "./components/sign-out-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  return (
    <div>
      Dashboard
      <h1>{session?.user.name}</h1>
      <h1>{session?.user.email}</h1>
      <SignOutButton />
    </div>
  );
}
