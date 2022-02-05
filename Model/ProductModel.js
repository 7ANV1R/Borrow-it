import mongoose from "mongoose";


const productSchema = mongoose.Schema({
 prodName: {
  type: String,
  required: true
 },
 details: String,
});

export default mongoose.model("products", productSchema);