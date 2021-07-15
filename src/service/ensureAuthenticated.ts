import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IPayLoad {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "c4091bafbf665a34dadb0123c261f84b"
    ) as IPayLoad;
    req.body.userId = sub;
    const usersRepositories = getCustomRepository(UsersRepositories);
    const user = await usersRepositories.findOne(sub);
    if (!user) {
      return res.status(401).end();
    }
    return next();
  } catch (error) {
    return res.status(401).end();
  }
}
