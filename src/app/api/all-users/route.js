import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    if (request.method === "GET") {
        try {
            const db = await DbConnect();
            const allUsers = db.collection('all-users');
            const result = await allUsers.find().toArray();
            return NextResponse.json(result);
        } catch (error) {
            console.error(error)
            return NextResponse.json({ error: "Error fetching user data" });
        }
    } else {
        return NextResponse.json({ message: "Method not allowed" });
    }
};
