import { Request, Response } from "express";
import { CreateAnnotationService } from "../../service/annotationServices/CreateAnnotationService";

export class CreateAnnotationController {
  async handle(req: Request, res: Response) {
    const { title, body, owner } = req.body;
    const createAnnotationService = new CreateAnnotationService();
    const annotation = await createAnnotationService.execute({
      title,
      body,
      owner,
    });
    return res.json(annotation);
  }
}
