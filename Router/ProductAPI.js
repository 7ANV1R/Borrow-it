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
   res.status(200).send(data);
  }
 });
});

router.get("/:id", (req, res) => {
 const id = req.params.id
 Product.findById(id).exec((err, data) => {
  if (err) {
   res.status(500).send(err);
  } else {
   res.status(200).send(data);
  }
 });
});

router.patch("/:id", (req, res) => {
 const prod = req.body;
 const id = req.params.id
 Product.findByIdAndUpdate(id, prod,{new: true}).then((data, err) => {
  if (err) {
   res.status(406).send(err);
  } else {
   res.status(202).send(data);
  }
 })
});


router.delete("/:id", (req, res) => {
 const id = req.params.id
 Product.findByIdAndDelete(id).exec((err, data) => {
  if (err) {
   res.status(406).send(err);
  } else {
   res.status(202).send(`This ${id}'s data was deleted\n`+data);
  }
 });
});


export default router;