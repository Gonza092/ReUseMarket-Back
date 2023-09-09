import { NextFunction, Request, Response } from "express";
import validateSchema from "../../helpers/validateJoi";
import recoverPassSchema from "../../schemasJoi/users/recoverPassSchema";
import recoverPass from "../../repository/user/recoverPass";

const recoverPassController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;

    await validateSchema(recoverPassSchema, req.body);

    await recoverPass(email);

    res.send({
      status: "ok",
      data: `Correo de recuperación enviado a ${email}`,
    });
  } catch (error) {
    next(error);
  }
};

export default recoverPassController;
