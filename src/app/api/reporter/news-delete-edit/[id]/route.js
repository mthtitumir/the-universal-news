import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const DELETE = async (request, {params}) => {
    if (request.method === "DELETE") {
        try {
            const db = await DbConnect();
            const allNews = db.collection('all-news');
            // console.log(params);
            const query = {id: parseInt(params?.id)};
            const result = await allNews.deleteOne(query);
            // console.log(result);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error deleting data:", error);
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
            const allNews = db.collection('all-news');
            const newData = await request.json();
            // console.log(params);
            const query = {id: parseInt(params?.id)};
            const updateDoc = { $set: newData };
            const result = await allNews.updateOne(query, updateDoc);
            // console.log(result);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error deleting data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}