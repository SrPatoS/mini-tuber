import { routes } from "./routes";

export class Server {
  constructor(
    private server: ServerApplication
  ) {
  }

  public awake(): void {
    routes(this.server);
  }
}