import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export type RequestExt = Request & {
  userId?: JwtPayload | { id: number };
};
