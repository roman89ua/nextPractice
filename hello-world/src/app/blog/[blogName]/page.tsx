import NotFound from "next/dist/client/components/not-found-error";

// this page Allow only two pages to be loaded or notfound page
const posts = ["first", "second"];
type AllowedPost = (typeof posts)[number];
const isPost = (param: string): param is AllowedPost => posts.includes(param);

const PostPage = ({ params }: { params: { blogName: AllowedPost } }) => {
  console.log(params.blogName);
  if (!isPost(params.blogName)) return <NotFound />;

  return (
    <section>
      <h1>Post page</h1>
      <p>post name: {params.blogName}</p>
    </section>
  );
};

export default PostPage;
