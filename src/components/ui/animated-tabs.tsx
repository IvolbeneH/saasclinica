"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { cn } from "@/lib/utils";

interface AnimatedTabsProps extends React.ComponentProps<typeof Tabs> {
  defaultValue: string;
  children: React.ReactNode;
}

interface AnimatedTabsContentProps
  extends React.ComponentProps<typeof TabsContent> {
  value: string;
  children: React.ReactNode;
}

const AnimatedTabs = ({ className, ...props }: AnimatedTabsProps) => {
  return <Tabs className={cn("w-full", className)} {...props} />;
};

const AnimatedTabsList = TabsList;
const AnimatedTabsTrigger = TabsTrigger;

const AnimatedTabsContent = ({
  children,
  value,
  ...props
}: AnimatedTabsContentProps) => {
  return (
    <TabsContent value={value} {...props}>
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </TabsContent>
  );
};

export {
  AnimatedTabs,
  AnimatedTabsList,
  AnimatedTabsTrigger,
  AnimatedTabsContent,
};
