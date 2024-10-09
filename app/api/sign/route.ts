import { type NextRequest, NextResponse } from "next/server";
import { pinata } from "../../../utils/config";

export const dynamic = "force-dynamic";
//try changing it to POST
export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const url = await pinata.gateways.createSignedURL({
        cid: data.cid,
        expires: 3000
    })
    let bob = NextResponse.json(url, { status: 200 });
    return bob
  } catch (error) {
    console.log(error);
    return NextResponse.json({ text: "Error creating API Key:" }, { status: 500 });
  }
}
