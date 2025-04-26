import {IncomingMessage, ServerResponse} from 'http';
import { ChatController } from '../controller';

export function routeHandler(req: IncomingMessage, res: ServerResponse) {
  if(req.url === '/api/v1/chat') {
    const chatController = new ChatController();
    return chatController.createChat(req, res);
  } else {
    throw new Error("not found");
  }
}