import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <h1>Home page</h1>
      <Link
        href={{
          pathname: `/products`,
        }}
      >
        products
      </Link>
      <br />
      <Link
        href={{
          pathname: `/blog`,
        }}
      >
        blog
      </Link>
      <br />

      <Link
        href={{
          pathname: `/profile`,
        }}
      >
        profile
      </Link>
      <br />

      <Link
        href={{
          pathname: `/about`,
        }}
      >
        about
      </Link>
      <br />

      <Link
        href={{
          pathname: `/docs`,
        }}
      >
        Docs
      </Link>
    </main>
  );
};

export default HomePage;
