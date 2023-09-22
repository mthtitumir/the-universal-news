import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const DELETE = async (request, {params}) => {
    if (request.method === "DELETE") {
        try {
            const db = await DbConnect();
            const allPhotos = db.collection('all-photos');
            // console.log(params);
            const query = {id: parseInt(params?.id.toString())};
            const result = await allPhotos.deleteOne(query);
            // console.log(result);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error deleting photo:", error);
            NextResponse.json({ error: "Error deleting photo" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}

export const PUT = async (request, {params}) => {
    if (request.method === "PUT") {
        try {
            const db = await DbConnect();
            const allPhotos = db.collection('all-photos');
            const newData = await request.json();
            // console.log(params);
            const query = {id: parseInt(params?.id.toString())};
            const updateDoc = { $set: newData };
            const result = await allPhotos.updateOne(query, updateDoc);
            // console.log(result);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error deleting data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}