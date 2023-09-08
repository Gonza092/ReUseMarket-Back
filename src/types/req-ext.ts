import { Request } from "express";

export type RequestExt = Request & {
  userId?: number;
};
