import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

const app = express();

connectDB();

app.listen(`${process.env.PORT}`, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
