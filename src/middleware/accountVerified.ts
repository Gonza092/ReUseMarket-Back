import { NextFunction, Request, Response } from "express";
import { generateError } from "../helpers/generateError";
import getAccountVerifiedByUsername from "../repository/user/getAccountVerifiedByUsername";

const accountVerified = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = req.body;
    const user = await getAccountVerifiedByUsername(username);

    if (!user.verified_at) {
      throw generateError(
        "Para continuar debes haber verificado tu cuenta desde el link que se envio a tu email",
        404
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default accountVerified;
