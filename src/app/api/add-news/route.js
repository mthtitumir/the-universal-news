
import DbConnect from "@/services/DbConnect";
// import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    if (request.method === "POST") {
        try {
            const body = await request.json();
            console.log(body);
            const db = await DbConnect();
            const allNews = db.collection('all-news');
            const {  id, title, description, img, category, subcategory, author, tags, comments, email, published_date} = body;
            const doc ={
                id, title, description, img, category, subcategory, author, tags, comments, email, published_date
            }
            const result = await allNews.insertOne(doc)
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Eroor ading data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}
