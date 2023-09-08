import { NextFunction, Response } from "express";
import getUserById from "../../repository/user/getUserById";
import { RequestExt } from "../../types/req-ext";

const getUserController = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req;

    const user = await getUserById(userId);

    res.send({
      status: "ok",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export default getUserController;
