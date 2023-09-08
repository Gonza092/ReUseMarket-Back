import { NextFunction, Request, Response } from "express";
import getUsers from "../../repository/user/getUsers";

const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getUsers();

    res.send({
      status: "ok",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export default getUsersController;
