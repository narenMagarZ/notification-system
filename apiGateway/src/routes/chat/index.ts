import { Router } from "express";
import { ChatRouter } from "./chatRoutes";
import { RouterClass } from "../routerClass";

class ChatProxyRouter {
  private static instance: ChatProxyRouter;
  private router: Router = Router();
  private readonly routes = [
    {
      segment: "/chat",
      handler: ChatRouter
    }
  ];

  static get() {
    if(!ChatProxyRouter.instance) {
      ChatProxyRouter.instance = new ChatProxyRouter();
    }
    return ChatProxyRouter.instance;
  }

  map(): Router {
    this.routes.forEach(route => {
      const handler = new route.handler() as RouterClass
      this.router.use(route.segment, handler.router)
    })
    return this.router;
  }
}

const chatProxyRouter = ChatProxyRouter.get();
export { chatProxyRouter as ChatProxyRouter };