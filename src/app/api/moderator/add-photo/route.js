import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    if (request.method === "POST") {
        try {
            const photoData = await request.json();
            // console.log(bookData);
            const db = await DbConnect();
            const allPhotos = db.collection('all-photos');
            const result = await allPhotos.insertOne(photoData);
            return NextResponse.json(result);
        } catch (error) { 
            console.error("Error adding photo:", error);
            NextResponse.json({ error: "Error adding photo" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}