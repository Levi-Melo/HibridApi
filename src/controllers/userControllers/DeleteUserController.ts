import { Request, Response } from "express";
import { DeleteUserService } from "../../service/userServices/DeleteUserService";

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const createUserService = new DeleteUserService();
    const user = await createUserService.execute({ id });
    return res.json(user);
  }
}
