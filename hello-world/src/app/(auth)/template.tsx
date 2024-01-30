"use client";

import TextInput from "@/app/components/TextInput";

const AuthPartTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <p>This input state will be revert to default for each page</p>
      <TextInput title="From template" />
      {children}
    </>
  );
};

export default AuthPartTemplate;
