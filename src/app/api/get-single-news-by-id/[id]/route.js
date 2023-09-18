import DbConnect from "@/services/DbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const GET = async (request, {params}) => {
    if (request.method === "GET") {
        try {
            const db = await DbConnect();
            const allNews = db.collection('all-news');
            const query = {_id: new ObjectId(params?.id)};
            const result = await allNews.findOne(query);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error deleting data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}