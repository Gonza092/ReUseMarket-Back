import { NextFunction, Request, Response } from "express";

const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.send({
      status: "ok",
      data: "a",
    });
  } catch (error) {
    next(error);
  }
};

export default updateUserController;
