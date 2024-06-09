import { usersModel } from "../../../prisma";
import { UsersType } from "../users.type";

export class UsersCreateUseCase {
  public async task(data: UsersType): Promise<UsersType> {
    const checkExist = await usersModel.findUnique({
      where: {
        email: data.email
      }
    });

    if (checkExist) {
      return { errors: ["User already exists"], valid: false } as UsersType;
    }

    const result = await usersModel.create({
      data: {
        email: data.email,
        name: data.name,
        username: data.username,
      }
    });

    return {
      valid: true,
      ...result
    }
  }
}