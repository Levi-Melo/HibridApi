import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";

export class DeleteUserService {
  async execute(id: string) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = usersRepositories
      .createQueryBuilder()
      .delete()
      .from(User)
      .where("id = :id", { id: id })
      .execute();
    return user;
  }
}
