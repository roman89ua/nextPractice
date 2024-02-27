import TextInput from "../../components/TextInput";

export const metadata = {
  title: "AUTH layout",
  description: "Authentication layout",
};
export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="bg-red-600 flex justify-center items-center flex-col">
      <TextInput title="Input from layout" />
      <h1 className="text-2xl text-center">Auth procedure</h1>
      <div className="m-auto text-center">{children}</div>
      <div>Some other content auth functionality related</div>
    </article>
  );
}
