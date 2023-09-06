import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/", updateUser);
router.post("/", registerUser);
router.post("/login", loginUser);
router.delete("/", deleteUser);

export { router };
