"use client";

import { useRouter } from "next/navigation";

const LoginBtn = () => {
  const { refresh, replace, back, push, prefetch, forward } = useRouter();

  function loginHandler() {
    console.log("Logged in");

    // replace("/");
    back();
  }

  return (
    <button
      type="button"
      onClick={loginHandler}
      className="border-blue-950 border-2 text-blue-950 rounded-md py-2 px-8 hover:text-white hover:bg-blue-950 hover:transition-colors"
    >
      Login
    </button>
  );
};

export default LoginBtn;
