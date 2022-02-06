import mongoose from "mongoose";


const productSchema = mongoose.Schema({
 prodName: {
  type: String,
  required: true
 },
 details: String,
 lifePoint : {
  type: Number,
  default: 0,
 },
 quantity: {
  type: Number,
  default: 1,
 },
 available: {
  type: Boolean,
  default: true,
 },
 pricePerDay: {
  type: Number,
  required: true,
 }
});

export default mongoose.model("products", productSchema);