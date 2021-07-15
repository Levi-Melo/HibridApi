import { Request, Response } from "express";
import { CreateAnnotationService } from "../service/annotationServices/CreateAnnotationService";
import { DeleteAnnotationService } from "../service/annotationServices/DeleteAnnotationService";
import { ListAnnotationService } from "../service/annotationServices/ListAnnotationService";
import { UpdateAnnotationService } from "../service/annotationServices/UpdateAnnotationService";

export class AnnotationController {
  async create(req: Request, res: Response) {
    const { title, body, userId } = req.body;
    const createAnnotationService = new CreateAnnotationService();
    const owner = userId;
    const annotation = await createAnnotationService.execute({
      title,
      body,
      owner,
    });
    return res.json(annotation);
  }
  async delete(req: Request, res: Response) {
    const id = req.body.userId;
    const createAnnotationService = new DeleteAnnotationService();
    await createAnnotationService.execute({ id });
    return res.json(`Annotation Deleted : ${id}`);
  }
  async list(req: Request, res: Response) {
    const { userId } = req.body;
    const listAnnotationService = new ListAnnotationService();
    const annotations = await listAnnotationService.execute(userId);

    return res.json(annotations);
  }
  async update(req: Request, res: Response) {
    const updateAnnotationService = new UpdateAnnotationService();
    const { id, title, body } = req.body;
    await updateAnnotationService.execute({
      id,
      title,
      body,
    });

    return res.json({ id: id, title: title, body: body });
  }
}
