import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String }
});

export default mongoose.model("Category", CategorySchema);
