import express from "express";
import { createClass, deleteClass, getClass, getClasses, updateClass } from "../controllers/class.controller";

const router = express.Router();
const subRouter = express.Router();

router.use("/api/class", subRouter);

subRouter.get("/", getClasses);
subRouter.get("/:classId", getClass);
subRouter.post("/", createClass);
subRouter.delete("/:classId", deleteClass);
subRouter.put("/:classId", updateClass);

export default router;