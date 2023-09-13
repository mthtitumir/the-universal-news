import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  if (request.method === "PATCH") {
    try {
      const db = await DbConnect();
      const allPosts = db.collection('all-posts');
      const query = { postId: parseInt(params?.id) };
      const result = await allPosts.findOne(query);
      const payload = await request.json();
      if (!result) {
        console.log("hello rom not result");
        return NextResponse.json({ error: "Post not found" });
      }
      // console.log(result.likes, "form route");
      if (payload.action === "like") {
        result.likes += 1;
      } else if (payload.action === "dislike") {
        result.dislikes += 1;
      } else {
        console.log("hello from invalid action");
        return NextResponse.json({ error: "Invalid action" });
      }
      // console.log(updatedLikes, "form route");

      // Update the database with the new counts
      const updateResult = await allPosts.updateOne(query, { $set: { likes: result.likes, dislikes: result.dislikes } });
      // console.log(updateResult);

      if (updateResult.modifiedCount === 1) {
        return NextResponse.json({ message: "Action updated successfully" });
      } else {
        return NextResponse.json({ error: "Failed to update action" });
      }
    } catch (error) {
      console.error("Error updating action:", error);
      return NextResponse.json({ error: "Error updating action" });
    }
  } else {
    return NextResponse.json({ message: "Method not allowed" });
  }
};
