import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { PORT } from "./constants.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(PORT || 8000, () => {
      `Server started on port ${PORT}`
    })
  })
  .catch((error) => console.log("MONGODB connection failed !!", error));


