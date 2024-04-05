import express from "express";
import { getAll, add, get } from "../controllers/class.controller";

const router = express.Router();
const subRouter = express.Router();

router.use("/api/class", subRouter);

subRouter.get("/", getAll);
subRouter.get("/:classId", get);
subRouter.post("/", add);

export default router;