import { Request, Response } from "express";
import { ListAnnotationService } from "../../service/annotationServices/ListAnnotationService";
export class ListAnnotationsController {
  async handle(req: Request, res: Response) {
    const { owner } = req.body;
    const listAnnotationService = new ListAnnotationService();
    const annotations = await listAnnotationService.execute(owner);

    return res.json(annotations);
  }
}
