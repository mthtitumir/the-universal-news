import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    if (request.method === "GET") {
        try {
            const { searchParams } = new URL(request.url);
            const email = searchParams.get('email');
            const db = await DbConnect();
            const allNews = db.collection('all-news');
            const query = { email: email };
            const result = await allNews.find(query).toArray(); 
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error fetching user data:", error);
            return NextResponse.json({ error: "Error fetching user data" });
        }
    } else {
        return NextResponse.json({ message: "Method not allowed" });
    }
};
