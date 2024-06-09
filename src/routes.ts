import { usersRoutes } from "./services/users/users.routes";

export function routes(app: ServerApplication) {
  app.register(usersRoutes);
}