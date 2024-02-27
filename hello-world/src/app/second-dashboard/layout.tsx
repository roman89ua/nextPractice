"use client";

import { useState } from "react";

const Layout = ({
  children,
  analytics,
  orders,
  users,
  login,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  orders: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <div>{children}</div>
      <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
      {loggedIn ? (
        <section
          title="second dashboard"
          className="p-4 flex gap-3 flex-row w-full h-full items-stretch"
        >
          <div className="flex flex-col gap-3 basis-4/5 shrink">
            <div className="h-1/2 bg-blue-200 p-2 flex justify-center items-center flex-col">
              <div>{analytics}</div>
            </div>
            <div className="h-1/2 bg-blue-200 p-2 flex justify-center items-center">
              {orders}
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-center bg-blue-200 basis-1/5 flex-shrink-0 p-2 text-center">
            {users}
          </div>
        </section>
      ) : (
        <>{login}</>
      )}
    </>
  );
};

export default Layout;
