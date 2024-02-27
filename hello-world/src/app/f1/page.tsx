import React from "react";
import Link from "next/link";

const F1Page = () => {
  return (
    <div>
      <h1>f1 page</h1>
      <Link
        href={{
          pathname: "/f1/f2",
        }}
      >
        f2
      </Link>
      <br />

      <Link
        href={{
          pathname: "/f1/f3",
        }}
      >
        f3
      </Link>
    </div>
  );
};

export default F1Page;
