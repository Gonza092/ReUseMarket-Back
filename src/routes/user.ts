import { Router } from "express";

import {
  getUsersController,
  getUserController,
  registerUserController,
  verifyEmailController,
  loginUserController,
  getMyUserController,
  updateUserController,
  deleteUserController,
  recoverPassController,
  updatePassWithCodeController,
} from "../controllers/user/index";

import verifyAccount from "../middleware/accountVerified";
import authUser from "../middleware/auth";

const router = Router();

router.get("/", getUsersController);
router.get("/:id", getUserController);
router.post("/", registerUserController);
router.get("/verify/:code", verifyEmailController);
router.post("/login", verifyAccount, loginUserController);
router.get("/my/profile", authUser, getMyUserController);
router.patch("/", authUser, updateUserController);
router.delete("/", authUser, deleteUserController);
router.patch("/recover", recoverPassController);
router.patch("/updatepass", updatePassWithCodeController);

export { router };
