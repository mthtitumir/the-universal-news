import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    if (request.method === "GET") {
        try {
            const { searchParams } = new URL(request.url);
            const emails = searchParams.get('email');
            const db = await DbConnect();
            const allJobs = db.collection('all-jobs');
            const query = { email: emails };
            const result = await allJobs.find(query).toArray(); 
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error fetching user data:", error);
            return NextResponse.json({ error: "Error fetching user data" });
        }
    } else {
        return NextResponse.json({ message: "Method not allowed" });
    }
};
