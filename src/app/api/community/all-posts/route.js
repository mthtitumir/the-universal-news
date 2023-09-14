import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    if (request.method === "GET") {
        try {
            const db = await DbConnect();
            const allPosts = db.collection('all-posts');
            const result = await allPosts.find().toArray();
            return NextResponse.json(result);
        } catch (error) {
            console.error(error)
            return NextResponse.json({ error: "Error fetching post data" });
        }
    } else {
        return NextResponse.json({ message: "Method not allowed" });
    }
};