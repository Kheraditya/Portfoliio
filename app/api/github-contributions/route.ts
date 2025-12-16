import { NextResponse } from "next/server";
import { getGitHubContributions } from "@/lib/github";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");
  if (!username)
    return NextResponse.json(
      { error: "username is required" },
      { status: 400 }
    );

  try {
    const data = await getGitHubContributions(username);
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(
      { error: String(err.message || err) },
      { status: 500 }
    );
  }
}
