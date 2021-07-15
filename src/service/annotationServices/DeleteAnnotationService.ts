import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { Annotation } from "../../entities/Annotation";

interface IAnnotationRequest {
  id: string;
}

export class DeleteAnnotationService {
  async execute({ id }: IAnnotationRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const annotation = usersRepositories
      .createQueryBuilder()
      .delete()
      .from(Annotation)
      .where("id = :id", { id })
      .execute();
    return annotation;
  }
}
