import { AnnotationRepositories } from "../../repositories/AnnotationRepositories";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

interface IUserRequest {
  title: string;
  body: string;
  owner: string;
}

export class CreateAnnotationService {
  async execute({ title, body, owner }: IUserRequest) {
    const annotationRepositories = getCustomRepository(AnnotationRepositories);

    const user = annotationRepositories.create({
      title,
      body,
      owner,
    });
    await annotationRepositories.save(user);
    return user;
  }
}
