import { NextRequest, NextResponse } from "next/server";
//export const dynamic = "force-dynamic"; // first way to make this route dynamic

export async function GET(request: NextRequest) {
  console.log(request.headers);
  /* to use request parameter for the GET method is the second way to have dynamically updated response or dynamic route*/
  return NextResponse.json({ time: new Date().toLocaleTimeString() });
}
/* to make this route dynamic there are 4 ways:
 * 1. to have exported variable dynamic with string value 'force-dynamic';
 * 2. to gave used in side route method some values from parameter request: NextRequest for example console.log(request.header)
 * 3. to have some different methods like POST, DELETE etc instead of GET;
 * 4. to use in side method 'cookies()' or 'headers()' methods */
