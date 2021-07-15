import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, password }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const userAlreadyExists = await usersRepositories.findOne({ email });

    if (!email) {
      throw new Error("E-mail incorrect");
    }

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = usersRepositories.create({
      name,
      email,
      password,
    });
    await usersRepositories.save(user);
    return user;
  }
}
