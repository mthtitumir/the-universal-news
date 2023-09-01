import DbConnect from "@/services/DbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const PATCH = async (request, {params}) => {
    if (request.method === "PATCH") {
        try {
            const db = await DbConnect();
            const allNews = db.collection('all-news');
            console.log(params);
            const query = {_id: new ObjectId(params?.id)}
            const result = await allNews.updateOne(query, {$set:{status: "approved"}})
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error updating data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}