import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    if (request.method === "GET") {
        try {
            const email = params?.email;
            // console.log(email)
            const db = await DbConnect();
            const allVideos = db.collection('all-videos');
            const query = { moderatorEmail: email };
            const result = await allVideos.find(query).toArray(); 
            // console.log(result);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error fetching user data:", error);
            return NextResponse.json({ error: "Error fetching user data" });
        }
    } else {
        return NextResponse.json({ message: "Method not allowed" });
    }
};