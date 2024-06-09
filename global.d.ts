import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

declare global {
  type ServerApplication = FastifyInstance;
  type DoneHandler = HookHandlerDoneFunction;
  type ServerRequest = FastifyRequest;
  type ServerReply = FastifyReply;
  type ErrorType = {
    valid: boolean;
    errors?: string[];
    data?: any;
  }
}