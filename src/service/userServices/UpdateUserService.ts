import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";

interface IUserRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UpdateUserService {
  async execute({ id, name, email, password }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = usersRepositories
      .createQueryBuilder()
      .update(User)
      .set({
        id,
        name,
        email,
        password,
      })
      .where("id = :id", { id: id })
      .execute();

    return users;
  }
}
