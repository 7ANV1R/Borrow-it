import express from "express"
import Product from "../Model/ProductModel.js";

const router = express.Router();

router.post("/", (req, res) => {
 const prod = req.body;
 Product.create(prod, (err, data) => {
  if (err) {
   res.status(500).send(err);
  } else {
   res.status(201).send(data);
  }
 });
});

router.get("/", (req, res) => {
 
 Product.find( (err, data) => {
  if (err) {
   res.status(500).send(err);
  } else {
   res.status(201).send(data);
  }
 });
});

router.get("/:id", (req, res) => {
 const id = req.params.id
 Product.findById(id).exec( (err, data) => {
  if (err) {
   res.status(500).send(err);
  } else {
   res.status(201).send(data);
  }
 });
});


export default router;