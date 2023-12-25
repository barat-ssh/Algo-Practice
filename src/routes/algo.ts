import express from "express";
const router = express.Router();

router.get("/", (req, res): void => {
  console.log("inside algo route ->");
  res.send("algo return");
});

export default router;
