"use client";

import { useState } from "react";

export default function DashboardLayout({
  children,
  metrics,
  notifications,
  user,
  login,
}: {
  children: React.ReactNode;
  metrics: React.ReactNode;
  notifications: React.ReactNode;
  user: React.ReactNode;
  login: React.ReactNode;
}) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <section className="h-full">
      <div>
        {children}
        <button
          type="button"
          className="border-blue-950 border-2 text-blue-950 rounded-md py-2 px-8 hover:text-white hover:bg-blue-950 hover:transition-colors"
          onClick={() => setLoggedIn(!loggedIn)}
        >
          Log{loggedIn ? "out" : "in"}
        </button>
      </div>
      <div className="flex flex-col lg:flex-row flex-1 h-full gap-4 p-4">
        {loggedIn ? (
          <>
            <div className="flex flex-col flex-1 gap-4 h-full">
              <div className="flex-1">{user}</div>
              <div className="flex-1">{notifications}</div>
            </div>
            <div className="flex flex-1">{metrics}</div>
          </>
        ) : (
          <div className="h-full">{login}</div>
        )}
      </div>
    </section>
  );
}
