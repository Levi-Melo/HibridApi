import { Request, Response } from "express";
import { UpdateAnnotationService } from "../../service/userServices/UpdateUserService";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const updateAnnotationService = new UpdateAnnotationService();
    const { id, email, password } = req.body;
    const annotation = await updateAnnotationService.execute({
      id,
      email,
      password,
    });

    return res.json(annotation);
  }
}
