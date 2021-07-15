import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { Annotation } from "../../entities/Annotation";

interface IAnnotationRequest {
  id: string;
  title: string;
  body: string;
}

export class UpdateAnnotationService {
  async execute({ id, title, body }: IAnnotationRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

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
