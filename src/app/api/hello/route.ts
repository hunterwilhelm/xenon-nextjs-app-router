import { NextResponse } from "next/server";
import Xenon from "xenon-view-sdk";

export async function GET(request: Request) {
  console.log("hello from the server");

  const XENON_API_KEY = process.env.NEXT_PUBLIC_XENON_API_KEY as string;
  Xenon.init(XENON_API_KEY);
  Xenon.accountSignupDeclined("kjsdfkjhaslkdfjhss");
  Xenon.commit();
  console.log("xenon on server side has ran");
  NextResponse.json(["server side worked"]);
}
