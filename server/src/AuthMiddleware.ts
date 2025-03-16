import { NextFunction, Request, Response } from "express";

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
};
