"use client";

import TextInput from "../../components/TextInput";

const AuthPartTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-emerald-700">
      <h4>This input state will be revert to default for each page which uses auth template</h4>
      <TextInput title="Input from template" />
      {children}
    </section>
  );
};

export default AuthPartTemplate;
