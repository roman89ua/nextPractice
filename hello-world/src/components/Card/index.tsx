import React from "react";

const CardCP = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center p-36 m-5 border-0 border-blue-950 shadow-md w-full">
    {children}
  </div>
);

export default CardCP;
