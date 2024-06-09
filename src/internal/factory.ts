import { fastify } from "fastify";
import { Server } from "../server";
import { logger } from "io-logger";

async function factory() {
  const app = fastify();
  const server = new Server(app);

  app.listen({ port: 3000 }, () => {
    logger.info("server listening on port: 3000");
  });

  server.awake();
}

factory();