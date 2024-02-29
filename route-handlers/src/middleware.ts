import { NextRequest, NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();

  response.cookies.set("theme", "light");

  return response;
}
