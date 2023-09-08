import { NextFunction, Request, Response } from "express";
import createUser from "../../repository/user/createUser";
import { AuthUser } from "../../types/registerUserTypes";
import validateSchema from "../../helpers/validateJoi";
import newUserSchema from "../../schemasJoi/users/newUserSchema";

const registerUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password }: AuthUser = req.body;

    await validateSchema(newUserSchema, req.body);

    const user = await createUser({
      email,
      password,
      username,
    });

    res.send({
      status: "ok",
      message: `Se ha enviado un link con el código de verificación a ${email}`,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export default registerUserController;
