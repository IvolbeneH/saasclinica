import {
  AnimatedTabs,
  AnimatedTabsContent,
  AnimatedTabsList,
  AnimatedTabsTrigger,
} from "@/components/ui/animated-tabs";
import { SignUpForm } from "./components/sign-up-form";
import { LoginForm } from "./components/login-form";

export default function Authentication() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <AnimatedTabs defaultValue="account" className="w-[400px]">
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
