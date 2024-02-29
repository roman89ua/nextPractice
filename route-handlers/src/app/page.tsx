import { cookies } from "next/headers";

export default function Home() {
  const theme = cookies().get("theme")?.value;
  let classes = "";
  if (theme === "dark") {
    classes = "bg-black text-white";
  } else {
    classes = "bg-white text-black";
  }
  console.log(theme);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${classes}`}
    >
      Routes Practice
    </main>
  );
}
