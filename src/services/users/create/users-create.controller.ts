import { validateDTO } from "../../../zod/validate-dto.zod";
import { usersSchema } from "../users.schema";
import { UsersCreateUseCase } from "./users-create.usecase";

export class UsersCreateController {

  constructor(
    private usecase: UsersCreateUseCase
  ) { }

  public async task(req: ServerRequest, reply: ServerReply): Promise<void> {
    const data = validateDTO(req.body, usersSchema);

    if (!data.valid) {
      reply.status(400).send(data);
      return;
    }

    const result = await this.usecase.task(data.data);

    if (result && !result.valid) {
      reply.status(400).send(result);
      return;
    }

    reply.status(201).send(result);
  }
}