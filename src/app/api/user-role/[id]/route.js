import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const GET = async (request, { params }) => {
    if (request.method === "GET") {
        try {
            const db = await DbConnect();
            const allUsers = db.collection('all-users');
            // console.log(params);
            const query = { email: params?.id }
            const result = await allUsers.findOne(query);
            // console.log(result);
            const role = result.role;
            if (result) {
                if (role === 'admin') {
                    return NextResponse.json({ role: "admin" });
                } else if (role === 'employer') {
                    return NextResponse.json({ role: "employer" });
                } else if (role === 'reporter') {
                    return NextResponse.json({ role: "reporter" });
                } else if (role === "moderator") {
                    return NextResponse.json({ role: "moderator" });
                } else if (role === 'user') {
                    return NextResponse.json({ role: "user" });
                } else {
                    return NextResponse.json({ message: "login koira ashen boss!" });
                }
            }
            return NextResponse.json({ message: "Xavier is calling you!" });
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error checking data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}