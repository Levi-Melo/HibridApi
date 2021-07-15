import { Request, Response } from "express";
import { UpdateAnnotationService } from "../../service/annotationServices/UpdateAnnotationService";

export class UpdateAnnotationController {
  async handle(req: Request, res: Response) {
    const updateAnnotationService = new UpdateAnnotationService();
    const { id, title, body } = req.body;
    const annotation = await updateAnnotationService.execute({
      id,
      title,
      body,
    });

    return res.json(annotation);
  }
}
