import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    if (request.method === "POST") {
        try {
            const {searchParams} = new URL(request.url)
            const emails = searchParams.get('email');
            const db = await DbConnect();
            const role = 'employer'
            const allUsers = db.collection('all-users');
            const result = await allUsers.updateOne(
                {email:emails},
                { $set: { role: role } }
            );
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Eroor ading data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}
