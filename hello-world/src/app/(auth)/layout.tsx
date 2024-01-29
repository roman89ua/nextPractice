export const metadata = {
  title: "Login layout",
  description: "Registration layout",
};
export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="">
      <h1 className="text-2xl text-center">Auth procedure</h1>
      <div className="m-auto text-center">{children}</div>
    </article>
  );
}
