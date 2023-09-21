import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const GET = async (request) => {
  if (request.method === "GET") {
    console.log(request.method);
    try {
      const { searchParams } = new URL(request.url);
      const title = searchParams.get("search");
      const db = await DbConnect();
      const jobs = await db
        .collection("all-jobs")
        .find({ title: { $regex: title, $options: "i" } })
        .toArray();
      return NextResponse.json(jobs);
    } catch (error) {
      console.error(error);
      return NextResponse.status(500).json({ error: "Internal server error" });
    }
  } else {
    return NextResponse.status(405).json({ error: "Method not allowed" });
  }
};
