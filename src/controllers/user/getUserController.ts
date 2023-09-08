import { NextFunction, Request, Response } from "express";
import getUserById from "../../repository/user/getUserById";

const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);

    res.send({
      status: "ok",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export default getUserController;
