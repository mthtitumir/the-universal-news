import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    if (request.method === "GET") {
        try {
            const email = params?.email;
            const db = await DbConnect();
            const allJobs = db.collection('all-jobs');
            const query = { authorEmail: email };
            console.log(query);
            const result = await allJobs.find(query).toArray();
            console.log(result);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error fetching user data:", error);
            return NextResponse.json({ error: "Error fetching employer jobs" });
        }
    } else {
        return NextResponse.json({ message: "Method not allowed" });
    }
};
