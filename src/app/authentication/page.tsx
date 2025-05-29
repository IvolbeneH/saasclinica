"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AnimatedTabs,
  AnimatedTabsContent,
  AnimatedTabsList,
  AnimatedTabsTrigger,
} from "@/components/ui/animated-tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SignUpForm } from "./components/sign-up-form";

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
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </AnimatedTabsContent>
        <AnimatedTabsContent value="register">
          <SignUpForm />
        </AnimatedTabsContent>
      </AnimatedTabs>
    </div>
  );
}
