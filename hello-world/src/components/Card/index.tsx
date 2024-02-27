import React from "react";

const CardCP = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames: string;
}) => (
  <div
    className={`flex items-center justify-center border-2 border-blue-950 shadow-md w-full h-full p-4 ${classNames}`}
  >
    {children}
  </div>
);

export default CardCP;
