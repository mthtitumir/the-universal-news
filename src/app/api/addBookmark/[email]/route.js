import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const POST = async (request, {params}) => {
    if (request.method === "POST") {
        try {
            const bookmarks = await request.json();
            // console.log(body);
            const email = params?.email;
            const db = await DbConnect();
            const allUsers = db.collection('all-users');
            const result = await allUsers.updateOne(
                { email: email},
                { $push: { myArtical: bookmarks } }
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
