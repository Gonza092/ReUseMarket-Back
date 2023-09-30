import { NextFunction, Request, Response } from "express";
import validateSchema from "../../helpers/validateJoi";
import loginUserSchema from "../../schemasJoi/user/loginUserSchema";
import loginUser from "../../repository/user/loginUser";

const loginUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;

    await validateSchema(loginUserSchema, req.body);

    const token = await loginUser(username, password);

    res.send({
      status: "ok",
      data: token,
    });
  } catch (error) {
    next(error);
  }
};

export default loginUserController;
