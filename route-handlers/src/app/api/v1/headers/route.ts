import { NextRequest, NextResponse } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: NextRequest) {
  const editableHeaders = new Headers(request.headers);
  const readOnlyHeaders = headers();
  editableHeaders.set("x-Some-Headers", "SOME_VALUE");
  editableHeaders.set("content-type", "application/json");

  console.log(editableHeaders.get("Authorization"));
  console.log(headers().get("Authorization"));
  console.log(headers());
  cookies().set("blabla", "some value for blabla");
  return new NextResponse(JSON.stringify({ content: "Content" }), {
    headers: {
      ...Object.fromEntries(editableHeaders),
      "set-cookie": "user-name=Roman",
    },
  });
}
