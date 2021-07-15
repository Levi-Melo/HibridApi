import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";

interface IUserRequest {
  id: string;
}

export class DeleteUserService {
  async execute({ id }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = usersRepositories
      .createQueryBuilder()
      .delete()
      .from(User)
      .where("id = :id", { id })
      .execute();
    return user;
  }
}
