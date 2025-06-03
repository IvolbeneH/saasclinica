import {
  AnimatedTabs,
  AnimatedTabsContent,
  AnimatedTabsList,
  AnimatedTabsTrigger,
} from "@/components/ui/animated-tabs";
import { SignUpForm } from "./components/sign-up-form";
import { LoginForm } from "./components/login-form";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function Authentication() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat blur-sm" />
      <div className="absolute inset-0 bg-black/50" />
      <AnimatedTabs defaultValue="login" className="relative z-10 w-[400px]">
        <AnimatedTabsList className="grid w-full grid-cols-2">
          <AnimatedTabsTrigger value="login">Login</AnimatedTabsTrigger>
          <AnimatedTabsTrigger value="register">
            Criar conta
          </AnimatedTabsTrigger>
        </AnimatedTabsList>
        <AnimatedTabsContent value="login">
          <LoginForm />
        </AnimatedTabsContent>
        <AnimatedTabsContent value="register">
          <SignUpForm />
        </AnimatedTabsContent>
      </AnimatedTabs>
    </div>
  );
}
