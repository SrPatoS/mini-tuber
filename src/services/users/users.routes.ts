import { UsersCreateController } from "./create/users-create.controller";
import { UsersCreateUseCase } from "./create/users-create.usecase";

export function usersRoutes(app: ServerApplication, {}, done: DoneHandler) {
  const usersCreate = new UsersCreateController(new UsersCreateUseCase());
  app.post("/users-create", usersCreate.task.bind(usersCreate));
  done();
}