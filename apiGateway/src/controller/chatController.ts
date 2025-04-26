import { IncomingMessage, ServerResponse } from "http";
import { RedisPubSub } from "../producer";

export class ChatController {
  public async createChat(req: IncomingMessage, res: ServerResponse) {
    await RedisPubSub.sendChatMessage({});
    res.end("done");
  }
}
