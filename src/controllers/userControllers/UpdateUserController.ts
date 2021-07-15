import { Request, Response } from "express";
import { UpdateUserService } from "../../service/userServices/UpdateUserService";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id, name, email, password } = req.body;
    const updateUserService = new UpdateUserService();
    const user = await updateUserService.execute({
      id,
      name,
      email,
      password,
    });
    return res.json(user);
  }
}
