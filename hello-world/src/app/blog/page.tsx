import Link from "next/link";
import {Metadata} from "next";
export const metadata: Metadata = {
  title: "BLOG TITLE FROM METADATA",
  description: "DESCRIPTION FOR BLOG PAGE"
}

const BlogPage = () => {
  return (
    <>
      <h1>Blog page</h1>
      <Link
        href={{
          pathname: "/blog/first",
        }}
      >
        First post
      </Link>
      <br />
      <Link
        href={{
          pathname: "/blog/second",
        }}
      >
        Second post
      </Link>
    </>
  );
};

export default BlogPage;
