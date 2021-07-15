import { Request, Response } from "express";
import { CreateAnnotationService } from "../service/annotationServices/CreateAnnotationService";
import { DeleteAnnotationService } from "../service/annotationServices/DeleteAnnotationService";
import { ListAnnotationService } from "../service/annotationServices/ListAnnotationService";
import { UpdateAnnotationService } from "../service/annotationServices/UpdateAnnotationService";

export class AnnotationController {
  async create(req: Request, res: Response) {
    const { title, body, owner } = req.body;
    const createAnnotationService = new CreateAnnotationService();
    const annotation = await createAnnotationService.execute({
      title,
      body,
      owner,
    });
    return res.json(annotation);
  }
  async delete(req: Request, res: Response) {
    const { id } = req.body;
    const createAnnotationService = new DeleteAnnotationService();
    const annotation = await createAnnotationService.execute({ id });
    return res.json(annotation);
  }
  async list(req: Request, res: Response) {
    const { owner } = req.body;
    const listAnnotationService = new ListAnnotationService();
    const annotations = await listAnnotationService.execute(owner);

    return res.json(annotations);
  }
  async update(req: Request, res: Response) {
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
