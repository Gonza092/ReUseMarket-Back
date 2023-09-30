import { NextFunction, Request, Response } from "express";
import getItems from "../../repository/item/getItems";

const getItemsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Items = await getItems();

    res.send({
      status: "ok",
      data: Items,
    });
  } catch (error) {
    next(error);
  }
};

export default getItemsController;
