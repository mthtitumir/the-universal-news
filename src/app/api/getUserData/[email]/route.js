import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const GET = async (request, {params}) => {
    if (request.method === "GET") {
        try {
            const db = await DbConnect();
            const email = params?.email;
            const allUsers = db.collection('all-users');
            const query = {email:email};
            const result = await allUsers.findOne(query);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error deleting data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}