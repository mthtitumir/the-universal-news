import DbConnect from "@/services/DbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const POST = async (request, {params}) => {
    if (request.method === "POST") {
        try {
            const body = await request.json();
            // console.log(body);
            const id = params.id;
            console.log(id)
            const db = await DbConnect();
            const allPosts = db.collection('all-posts');
            const query = { postId: parseInt(params?.id) };
            const { text, authorName,authorImage, date } = body;
            const result = await allPosts.updateOne(
                query,
                { $push: { comments: { id: Math.floor(Math.random() * 100000), text, date,authorName,authorImage } } }
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
