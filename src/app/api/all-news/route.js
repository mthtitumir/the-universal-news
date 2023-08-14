import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const GET = async ({}) => {
    const db = await DbConnect();
    const allNews = db.collection('all-news');
    const result = await allNews.find().toArray();
    return NextResponse.json(result);
};

