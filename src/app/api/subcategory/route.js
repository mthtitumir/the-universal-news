import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const { searchParams } = new URL(request.url)
    const subcategory = searchParams.get('subcategory')
    const query = { subcategory: subcategory };
    const db = await DbConnect();
    const allNews = db.collection('all-news');
    const result = await allNews.find(query).toArray();
    return NextResponse.json(result);
};