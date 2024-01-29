import Link from "next/link";

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
