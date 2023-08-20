import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    if (request.method === "POST") {
        try {
            const body = await request.json();
            const db = await DbConnect();
            const allUsers = db.collection('all-users');
            const { name, email, photo } = body;
            console.log(email)
            const doc = {
                name, email, photo
            }
            const query = { email: allUsers.email };
            const existingUser = await userses.findOne(query);
            if (existingUser) {
                return NextResponse.json({ message: 'vai already added' });
            }
            const result = await allUsers.insertOne(doc)
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error adding new user" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}