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
      <br/>
      <Link
        href={{
          pathname: `/_lib`,
        }}
      >
        page with underscore in url _lib by %5F
      </Link>
      <br/>

      <Link
        href={{
          pathname: `/_privateLib`,
        }}
      >
        private page which will not be shown for the user because of underscore in the name of folder as a page route. Leed to page not found
      </Link>
      <br/>

    </main>
  );
};

export default HomePage;
