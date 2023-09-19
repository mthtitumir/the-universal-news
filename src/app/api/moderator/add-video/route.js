import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    if (request.method === "POST") {
        try {
            const videoData = await request.json();
            // console.log(videoData);
            const db = await DbConnect();
            const allVideos = db.collection('all-videos');
            const result = await allVideos.insertOne(videoData);
            return NextResponse.json(result);
        } catch (error) { 
            console.error("Error adding video:", error);
            NextResponse.json({ error: "Error adding video" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}