"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mainLinks: { title: string; pathname: string }[] = [
  {
    title: "Products",
    pathname: "/products",
  },
  {
    title: "Blog",
    pathname: "/blog",
  },
  {
    title: "Profile",
    pathname: "/profile",
  },
  {
    title: "About",
    pathname: "/about",
  },
  {
    title: "Docs",
    pathname: "/docs",
  },
  {
    title: "_lib by %5F",
    pathname: "/_lib",
  },
  {
    title: "/_privateLib",
    pathname: "/_privateLib",
  },
  {
    title: "register",
    pathname: `/register`,
  },
  {
    title: "Forgot password",
    pathname: "/forgoPassword",
  },
  {
    title: "Login",
    pathname: "/login",
  },
  {
    title: "Dashboard",
    pathname: "/dashboard",
  },

  {
    title: "Gallery",
    pathname: "/gallery",
  },
];
const MainNavbar = () => {
  const path = usePathname();
  console.log({ path });

  return (
    <nav className="flex gap-5">
      {mainLinks.map((link) => {
        const isActive = path.startsWith(link.pathname);

        return (
          <Link
            key={link.pathname}
            href={link.pathname}
            className={`${isActive ? "text-red-200  font-extrabold" : ""}`}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNavbar;
