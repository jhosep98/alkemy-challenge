import { Router } from "express";

const router = Router();

router.get("/api/operations", (req, res) => res.send("operations"));

export default router;
