import Link from "next/link";
import React from "react";

const F3Page = () => {
  return (
    <div>
      F3 page
      <br />
      <Link
        href={{
          pathname: "/f1/f3/f4",
        }}
      >
        f4
      </Link>
      <br />
      <hr />
      <Link
        href={{
          pathname: "/intercepted-route",
        }}
      >
        Intercepted Route
      </Link>
    </div>
  );
};

export default F3Page;
