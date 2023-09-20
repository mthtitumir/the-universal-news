import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  if (request.method === "PATCH") {
    try {
      const db = await DbConnect();
      const payload = await request.json();
      const allPosts = db.collection('all-posts');
      const allUsers = db.collection('all-users');
      const query = { postId: parseInt(params?.id) };
      const queryes = { email: payload?.email };
      
      const result = await allPosts.findOne(query);
      const results = await allUsers.findOne(queryes);

      if (!result) {
        console.log("Post not found");
        return NextResponse.json({ error: "Post not found" });
      }
      const userLikes = results.likes || [];
      const postId = params?.id;

      if (userLikes.includes(postId)) {
        result.islike=false
        result.likes -= 1;
        userLikes.splice(userLikes.indexOf(postId), 1);     
      } else {
        result.islike=true
        result.likes += 1;
        userLikes.push(postId);
      }

      // Update the database with the new counts and userLikes
      const updateResult = await allPosts.updateOne(query, { $set: { likes: result.likes,islike:result.islike } });
      const updateUserResult = await allUsers.updateOne(queryes, { $set: { likes: userLikes } });
      if (updateResult.modifiedCount === 1 && updateUserResult.modifiedCount === 1) {
        return NextResponse.json({data:result?.likes,islike:result?.islike});
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
