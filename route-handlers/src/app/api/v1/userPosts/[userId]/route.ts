import { NextRequest, NextResponse } from "next/server";
import { PostData } from "@/app/api/v1/posts/newPost";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } },
) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`,
  ).then((response) => response.json());

  const searchParams = request.nextUrl.searchParams;
  const queryParam = searchParams.get("query") ?? "";

  const filteredPosts = result.filter(
    (post: PostData) =>
      post.title.includes(queryParam) || post.body.includes(queryParam),
  );

  if (!!queryParam) {
    return NextResponse.json(filteredPosts);
  }

  return NextResponse.json(result);
}
