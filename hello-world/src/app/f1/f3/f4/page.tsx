import React from "react";
import Link from "next/link";

const F4Page = () => {
  return (
    <div>
      <h1>F4Page</h1>
      <Link
        href={{
          pathname: "/blog",
        }}
      >
        go to blog page
      </Link>
    </div>
  );
};

export default F4Page;
