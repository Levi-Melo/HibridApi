import { Request, Response } from "express";
import { UpdateUserService } from "../../service/userServices/UpdateUserService";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const updateAnnotationService = new UpdateUserService();
    const { id, email, password } = req.body;
    const user = await updateAnnotationService.execute({
      id,
      email,
      password,
    });

    return res.json(user);
  }
}
