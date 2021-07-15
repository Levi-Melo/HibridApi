import { Request, Response } from "express";
import { AuthenticateUserService } from "../service/userServices/AuthenticateUserService";
import { CreateUserService } from "../service/userServices/CreateUserService";
import { DeleteUserService } from "../service/userServices/DeleteUserService";
import { ListUserService } from "../service/userServices/ListUserService";
import { UpdateUserService } from "../service/userServices/UpdateUserService";

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      email,
      password,
    });
    return res.json(user);
  }
  async delete(req: Request, res: Response) {
    const id = req.body.userId;
    const createUserService = new DeleteUserService();
    const user = await createUserService.execute(id);
    return res.json(user);
  }
  async list(req: Request, res: Response) {
    const listUserService = new ListUserService();
    const users = await listUserService.execute();

    return res.json(users);
  }
  async update(req: Request, res: Response) {
    const { userId, name, email, password } = req.body;
    const id = userId;
    const updateUserService = new UpdateUserService();
    const user = await updateUserService.execute({
      id,
      name,
      email,
      password,
    });
    return res.json(user);
  }
  async auth(req: Request, res: Response) {
    const { email, password } = req.body;

    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({ email, password });

    return res.json(token);
  }
}
