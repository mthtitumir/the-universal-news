import DbConnect from "@/services/DbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const id = params.id;
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const query = { _id: new ObjectId(id) }
        const result = await allNews.findOne(query)
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("error for geting data", error);
        NextResponse.json({ error: "eroor for geting data" });
    }
};




