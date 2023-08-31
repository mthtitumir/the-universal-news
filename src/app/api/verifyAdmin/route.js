import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const GET = async (request) => {
    if (request.method === "GET") {
        try {
            const { searchParams } = new URL(request.url)
            const emails = searchParams.get('email');
            const db = await DbConnect();
            const allUsers = db.collection('all-users');
            const query = {email:emails}
            const isAdmin = await allUsers.findOne(query)
            console.log(isAdmin)
            const result = { admin: isAdmin?.role === 'admin' }
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Eror ading data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}
