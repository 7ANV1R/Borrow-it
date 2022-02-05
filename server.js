import express from "express";

import 'dotenv/config';
import mongoose from "mongoose";
import apiRouter from "./Router/ProductAPI.js"



//app config
const app = express();
const port = process.env.PORT || 8000;

const db_connection_url = process.env.DB_URL;

//middlewares
app.use(express.json());

app.use("/product", apiRouter);

//db config

mongoose.connect(db_connection_url, {
 useNewUrlParser: true,
}, () => console.log(`connected with databse`))


//Route


app.get("/", (req, res) => {
 res.status(200).send("Running");
});




// Listener


app.listen(port, () => console.log(`server up and running on localhost and port ${port}`));