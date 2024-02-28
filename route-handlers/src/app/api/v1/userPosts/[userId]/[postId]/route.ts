import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: { userId: string; postId: string } },
) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}?userId=${params.userId}`,
  ).then((response) => response.json());
  return NextResponse.json(result);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { userId: string; postId: string } },
) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}?userId=${params.userId}`,
    {
      method: "PATCH",
      body: await request.json(),
    },
  ).then((response) => response.json());
  console.log("PATCH RESPONSE", result);
  return NextResponse.json(result);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { userId: string; postId: string } },
) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}?userId=${params.userId}`,
    {
      method: "DELETE",
    },
  ).then((response) => response.json());
  console.log("delete result", result);
  return NextResponse.json(result);
}
