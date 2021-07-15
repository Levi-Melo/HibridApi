import { getCustomRepository } from "typeorm";
import { AnnotationRepositories } from "../../repositories/AnnotationRepositories";
import { classToPlain } from "class-transformer";
export class ListAnnotationService {
  async execute(owner: string) {
    const annotationRepositories = getCustomRepository(AnnotationRepositories);
    const Annotations = await annotationRepositories
      .createQueryBuilder("annotation")
      .where("annotation.owner = :owner", { owner })
      .getMany();
    return classToPlain(Annotations);
  }
}
