import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  }
})

const Post = models.Post || model("Post", PostSchema);

export default Post;