import { AnnotationRepositories } from "../../repositories/AnnotationRepositories";
import { getCustomRepository } from "typeorm";

interface IAnnotationRequest {
  title: string;
  body: string;
  owner: string;
}

export class CreateAnnotationService {
  async execute({ title, body, owner }: IAnnotationRequest) {
    const annotationRepositories = getCustomRepository(AnnotationRepositories);

    const annotation = annotationRepositories.create({
      title,
      body,
      owner,
    });
    await annotationRepositories.save(annotation);
    return annotation;
  }
}
