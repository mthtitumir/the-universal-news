import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    if (request.method === "POST") {
        try {
            const body = await request.json();
            const db = await DbConnect();
            const aplyedJobs = db.collection('all-job-aplyed');
            const { resume,coverLetter,email,usersemail} = body;
            const doc ={
                resume,coverLetter,email,usersemail
            }
            const result = await aplyedJobs.insertOne(doc)
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error adding data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}
