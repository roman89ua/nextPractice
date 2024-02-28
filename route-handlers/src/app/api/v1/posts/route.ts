import { getPosts } from "@/app/api/v1/posts/getPosts";
import { NextRequest, NextResponse } from "next/server";
import { newPost, PostData } from "@/app/api/v1/posts/newPost";
import { headers } from "next/headers";

export async function GET() {
  return NextResponse.json(await getPosts());
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const response = await newPost(data);
  return new NextResponse(
    JSON.stringify({
      body: response,
      headers: {
        "Content-Type": "application/json",
      },
    }),
  );
}
