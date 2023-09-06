import { NextFunction, Request, Response } from "express";

import { createUser, getUserById } from "../services/user";
import { AuthUser } from "../types/registerUserInterface";
import validateSchema from "../helpers/validateJoi";
import newUserSchema from "../schemasJoi/users/newUserSchema";

const getUsers = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
};

const getUser = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
};

const updateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
};

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password }: AuthUser = req.body;

    validateSchema(newUserSchema, req.body);

    const user_id = await createUser({
      email,
      password,
      username,
    });

    const user = await getUserById(user_id);

    res.send({
      status: "ok",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
};

const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
};

export { getUser, getUsers, updateUser, registerUser, loginUser, deleteUser };
