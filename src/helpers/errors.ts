import { Request, Response } from "express";
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
  res: Response
): void => {
  console.error(error);
  res.status(error.httpStatusCode || 500).send({
    status: "Error",
    message: error.message,
  });
};
