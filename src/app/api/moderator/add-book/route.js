import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    if (request.method === "POST") {
        try {
            const bookData = await request.json();
            // console.log(bookData);
            const db = await DbConnect();
            const allBooks = db.collection('all-books');
            const result = await allBooks.insertOne(bookData);
            return NextResponse.json(result);
        } catch (error) { 
            console.error("Error adding book:", error);
            NextResponse.json({ error: "Error adding book" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}