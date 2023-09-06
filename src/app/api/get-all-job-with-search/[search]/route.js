import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    if (request.method === "GET") {
        try {
            const search = params.search;
            console.log(search)
            const db = await DbConnect();
            const allJobs = db.collection('all-jobs');
            const query = { jobTitle: {$regex :search,$options:"i" }};
            const result = await allJobs.find(query).toArray(); 
            console.log(result)
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error fetching user data:", error);
            return NextResponse.json({ error: "Error fetching user data" });
        }
    } else {
        return NextResponse.json({ message: "Method not allowed" });
    }
};
