import { AnnotationRepositories } from "../../repositories/AnnotationRepositories";
import { getCustomRepository } from "typeorm";
import { Annotation } from "../../entities/Annotation";

interface IAnnotationRequest {
  id: string;
  title: string;
  body: string;
}

export class UpdateAnnotationService {
  async execute({ id, title, body }: IAnnotationRequest) {
    const usersRepositories = getCustomRepository(AnnotationRepositories);

    const annotation = usersRepositories
      .createQueryBuilder()
      .update(Annotation)
      .set({
        title,
        body,
      })
      .where("id = :id", { id })
      .execute();
    return annotation;
  }
}
