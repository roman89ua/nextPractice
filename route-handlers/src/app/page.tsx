import { cookies } from "next/headers";
import Image from "next/image";

export default function Home() {
  const theme = cookies().get("theme")?.value;
  let classes: string;
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
      <Image
        width={1000}
        height={1000}
        alt="mage"
        src="https://www.southernliving.com/thmb/F6CmBtFFGbA86t7rlicydxNcDnQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1312619551-15706e976a2d4e48bfedbf92bd4421c2.jpg"
      />
    </main>
  );
}
