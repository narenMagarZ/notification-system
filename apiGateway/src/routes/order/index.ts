import { Router } from "express";
import { OrderRouter } from "./orderRoute";
import { RouterClass } from "../routerClass";

class OrderProxyRouter {
  private static instance: OrderProxyRouter;
  private router: Router = Router();
  private readonly routes = [
    {
      segment: "/chat",
      handler: OrderRouter
    }
  ];

  static get() {
    if(!OrderProxyRouter.instance) {
      OrderProxyRouter.instance = new OrderProxyRouter();
    }
    return OrderProxyRouter.instance;
  }

  map(): Router {
    this.routes.forEach(route => {
      const handler = new route.handler() as RouterClass
      this.router.use(route.segment, handler.router)
    })
    return this.router;
  }
}

const orderProxyRouter = OrderProxyRouter.get();
export { orderProxyRouter as OrderProxyRouter };