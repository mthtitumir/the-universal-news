import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    if (request.method === "POST") {
        try {
            const post = await request.json();
            // console.log(post);
            const db = await DbConnect();
            const allPosts = db.collection('all-posts');
            const result = await allPosts.insertOne(post);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding post:", error);
            NextResponse.json({ error: "Error adding post" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}
