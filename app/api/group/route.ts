import { pinata } from "../../../utils/config";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
try {
    const groups = await pinata.groups.get({
      groupId: "019284a8-2202-7e10-b799-6e74ace4b3da",
    });
    console.log(groups)
    return NextResponse.json(groups, { status: 200 });
  } 
  catch (error) {
    console.log(error);
    return NextResponse.json({ text: "Error creating API Key:" }, { status: 500 });
  }

}