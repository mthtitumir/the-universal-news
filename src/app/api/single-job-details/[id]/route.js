import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const GET = async (request, {params}) => {
    if (request.method === "GET") {
        try {
            const db = await DbConnect();
            const allJobs = db.collection('all-jobs');
            // console.log(params.id);
            const query = {jobId: parseInt(params?.id)};
            // console.log(query, "query");
            const result = await allJobs.findOne(query);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error deleting data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}