import { Router } from "express";
import authUser from "../middleware/auth";
import {
  createItemController,
  getItemsController,
  getItemByIdController,
  deleteItemByIdController,
} from "../controllers/item/index";

const router = Router();

router.get("/", getItemsController);
router.get("/:id", getItemByIdController);
router.post("/", authUser, createItemController);
router.patch("/", authUser);
router.delete("/:id", authUser, deleteItemByIdController);

export { router };
