import { NextFunction, Request, Response } from "express";
import { CustomError } from "./generateError";

export const notFound = (req: Request, res: Response) => {
  res.status(404).send({
    status: "Error",
    message: "Ruta no encontrada",
  });
};

export const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(error.message);
  res.status(error.httpStatusCode || 500).send({
    status: "Error",
    message: error.message,
  });
};
