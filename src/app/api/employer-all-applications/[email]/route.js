import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    if (request.method === "GET") {
        try {
            const email = params?.email;
            const db = await DbConnect();
            const applications = db.collection('job-applications');
            const query = { employerEmail: email };
            const result = await applications.find(query).toArray(); 
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error fetching user data:", error);
            return NextResponse.json({ error: "Error fetching user data" });
        }
    } else {
        return NextResponse.json({ message: "Method not allowed" });
    }
};