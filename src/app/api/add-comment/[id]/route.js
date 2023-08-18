import DbConnect from "@/services/DbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const POST = async (request, {params}) => {
    if (request.method === "POST") {
        try {
            const body = await request.json();
            const id = params.id
            const db = await DbConnect();
            const allNews = db.collection('all-news');
            const { comments, author,currentDate } = body;
            const result = await allNews.updateOne(
                { _id: new ObjectId(id) },
                { $push: { comments: { id: Math.floor(Math.random() * 100000), author, text: comments, date: currentDate } } }
            );
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error adding comment" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}
