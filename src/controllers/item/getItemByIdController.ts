import { NextFunction, Request, Response } from "express";
import getItemById from "../../repository/item/getItemById";

const getItemByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const item = await getItemById(id);

    res.send({
      status: "ok",
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

export default getItemByIdController;
