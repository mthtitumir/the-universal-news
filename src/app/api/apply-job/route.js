import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    if (request.method === "POST") {
        try {
            const applicationData = await request.json();
            // console.log(applicationData);
            const db = await DbConnect();
            const appliedJobs = db.collection('job-applications');
            const result = await appliedJobs.insertOne(applicationData);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error adding data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}