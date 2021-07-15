import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";

interface IUserRequest {
  id: string;
  email: string;
  password: string;
}

export class UpdateAnnotationService {
  async execute({ id, email, password }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = usersRepositories
      .createQueryBuilder()
      .update(User)
      .set({
        email,
        password,
      })
      .where("id = :id", { id })
      .execute();

    return users;
  }
}
