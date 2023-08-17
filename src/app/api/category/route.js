import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const query = { category: category };
    const db = await DbConnect();
    const allNews = db.collection('all-news');
    const result = await allNews.find(query).toArray();
    return NextResponse.json(result);
};