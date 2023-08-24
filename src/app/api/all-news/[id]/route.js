import DbConnect from "@/services/DbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async ({ params }) => {
    const id = (params.id)
    const db = await DbConnect();
    const allNews = db.collection('all-news');
    const query = { _id: new ObjectId(id) }
    const result = await allNews.findOne(query)
    return NextResponse.json(result);
};