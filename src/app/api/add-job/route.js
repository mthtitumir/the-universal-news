import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    if (request.method === "POST") {
        try {
            const job = await request.json();
            // console.log(job);
            const db = await DbConnect();
            const allJobs = db.collection('all-jobs');
            const result = await allJobs.insertOne(job);
            return NextResponse.json(result);
        } catch (error) { 
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error adding data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}
