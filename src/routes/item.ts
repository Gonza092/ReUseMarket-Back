import { Router } from "express";
import authUser from "../middleware/auth";

const router = Router();

router.get("/");
router.get("/:id");
router.post("/");
router.patch("/", authUser);
router.delete("/", authUser);

export { router };
