import express from "express";
const app = express();
app.use(express.json());

// importing routes
import algoRoute from "./routes/algo";

// using routes
app.use("/", algoRoute);

app.listen(3001, () => {
  console.log("server hitting....");
});
