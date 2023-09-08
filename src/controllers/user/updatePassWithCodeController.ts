import { NextFunction, Request, Response } from "express";
import validateSchema from "../../helpers/validateJoi";
import updatePassWithCodeSchema from "../../schemasJoi/users/updatePassWithCodeSchema";
import updatePassWithCode from "../../repository/user/UpdatePassWithCode";

const updatePassWithCodeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { recoverPassCode, password } = req.body;

    await validateSchema(updatePassWithCodeSchema, req.body);

    await updatePassWithCode(recoverPassCode, password);

    res.send({
      status: "ok",
      data: "Contraseña actualizada correctamente",
    });
  } catch (error) {
    next(error);
  }
};

export default updatePassWithCodeController;
