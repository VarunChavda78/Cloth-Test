import express from "express";
import cors from "cors";
// const express=require('express')
import "dotenv/config";
import connectdb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import prodcutRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// app config
const app = express();
const port = process.env.PORT || 4000;
connectdb();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", prodcutRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);




app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server started on PORT:" + port));
