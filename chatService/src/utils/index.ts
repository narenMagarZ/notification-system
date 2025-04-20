import { IncomingMessage, ServerResponse } from "http";

export function exceptionHandler(handler: (req: IncomingMessage, res: ServerResponse) => any) {
  return (req: IncomingMessage, res: ServerResponse) => {
    return Promise.reject(handler(req, res));
  }
}