import express from "express";
import { getAll, add, get } from "../controllers/class.controller";
import { auth } from "../middlewares/auth.middleware";
const router = express.Router();
const subRouter = express.Router();

router.use("/api/class", subRouter);

subRouter.get("/", auth,  getAll);
subRouter.get("/:classId", auth,  get);
subRouter.post("/", auth, add);

export default router;