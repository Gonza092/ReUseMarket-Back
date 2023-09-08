import { NextFunction, Response } from "express";
import { RequestExt } from "../../types/req-ext";
import deleteUser from "../../repository/user/deleteUser";

const deleteUserController = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req;

    await deleteUser(userId);

    res.send({
      status: "ok",
      data: "usuario borrado correctamente.",
    });
  } catch (error) {
    next(error);
  }
};

export default deleteUserController;
