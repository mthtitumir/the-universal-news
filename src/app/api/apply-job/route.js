import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    if (request.method === "POST") {
        try {
            const body = await request.json();
            const db = await DbConnect();
            const appliedJobs = db.collection('job-applications');
            const { jobId, resume, coverLetter, employerEmail, userEmail } = body;
            const doc = {
                jobId, resume, coverLetter, employerEmail, userEmail
            }
            const result = await appliedJobs.insertOne(doc);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error adding data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}