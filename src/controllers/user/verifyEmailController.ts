import { NextFunction, Request, Response } from "express";
import verifyEmail from "../../repository/user/verifyEmail";
import validateSchema from "../../helpers/validateJoi";
import verifyEmailSchema from "../../schemasJoi/user/verifyEmailSchema";

const verifyEmailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { code } = req.params;

    await validateSchema(verifyEmailSchema, req.params);

    await verifyEmail(code);

    res.send({
      status: "ok",
      message: "Cuenta verificada correctamente!",
    });
  } catch (error) {
    next(error);
  }
};

export default verifyEmailController;
