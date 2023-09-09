import { generateError } from "../helpers/generateError";
import { RequestExt } from "../types/req-ext";
import { NextFunction, Response } from "express";
import { verifyToken } from "../helpers/jwtHandle";

const authUser = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw generateError("Falta la cabecera de Authorization", 401);
    }

    let token;

    try {
      token = verifyToken(authorization) as { id: number };
    } catch {
      throw generateError("Token incorrecto", 401);
    }

    req.userId = token.id;

    next();
  } catch (error) {
    next(error);
  }
};

export default authUser;
