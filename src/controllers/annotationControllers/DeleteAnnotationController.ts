import { Request, Response } from "express";
import { DeleteAnnotationService } from "../../service/annotationServices/DeleteAnnotationService";

export class DeleteAnnotationController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const createAnnotationService = new DeleteAnnotationService();
    const annotation = await createAnnotationService.execute({ id });
    return res.json(annotation);
  }
}
