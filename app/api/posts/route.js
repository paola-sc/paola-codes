import { connectToDB } from "../../../utils/database";
import Post from "../../../models/post";

export const GET = async (request) => {
  try {
    await connectToDB();
    const posts = await Post.find({});
    return new Response(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify("Failed to fetch all posts"), { status: 500 })
  }
}
