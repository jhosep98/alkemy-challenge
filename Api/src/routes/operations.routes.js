import { Router } from "express";
import {
  getOperations,
  createOperation,
  updateOperation,
  deleteOperation,
} from "../controllers/operations.controller";

const router = Router();

router.get("/api/operations", getOperations);
router.post("/api/operations", createOperation);
router.put("/api/operations/:id", updateOperation);
router.delete("/api/operations/:id", deleteOperation);

export default router;
