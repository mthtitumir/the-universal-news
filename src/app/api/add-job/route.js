import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    if (request.method === "POST") {
        try {
            const body = await request.json();
            const db = await DbConnect();
            const allJobs = db.collection('all-jobs');
            const {  id, title, description, requiredSkills, companyName, companyLogo, jobLocation, employmentType, applicationDeadline, category, jobType, startingTime, experience, jobCategory, applicationInstructions, jobsdescription, status, datePosted, email,author} = body;
            const doc ={
                id, title, description, requiredSkills, companyName, companyLogo, jobLocation, employmentType, applicationDeadline, category, jobType, startingTime, experience, jobCategory, applicationInstructions, jobsdescription, status, datePosted, email,author
            }
            const result = await allJobs.insertOne(doc)
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding comment:", error);
            NextResponse.json({ error: "Error adding data" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}
