import dbCunnect from "@/mongodb-cunect/dbCunnect";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await dbCunnect();
    const allNews = db.collection('all-news');
    const result = await allNews.find().toArray();
    return NextResponse.json(result);
  };