import React from "react";

const CardCP = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center border-2 border-blue-950 shadow-md w-full h-full p-4">
    {children}
  </div>
);

export default CardCP;
