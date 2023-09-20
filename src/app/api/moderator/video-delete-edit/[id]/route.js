import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const DELETE = async (request, {params}) => {
    if (request.method === "DELETE") {
        try {
            const db = await DbConnect();
            const allVideos = db.collection('all-videos');
            // console.log(params);
            const query = {videoId: params?.id}
            const result = await allVideos.deleteOne(query)
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error deleting data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}


export const PUT = async (request, {params}) => {
    if (request.method === "PUT") {
        try {
            const db = await DbConnect();
            const allVideos = db.collection('all-videos');
            const newData = await request.json();
            // console.log(params);
            const query = {videoId: params?.id};
            const updateDoc = { $set: newData };
            const result = await allVideos.updateOne(query, updateDoc);
            // console.log(result);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error editing data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}