import { Router } from "express";
import { TransactionRouter } from "./transactionRoutes";
import { RouterClass } from "../routerClass";

class TransactionProxyRouter {
  private static instance: TransactionProxyRouter;
  private router: Router = Router();
  private readonly routes = [
    {
      segment: "/transaction",
      handler: TransactionRouter
    }
  ];

  static get() {
    if(!TransactionProxyRouter.instance) {
      TransactionProxyRouter.instance = new TransactionProxyRouter();
    }TransactionProxyRouter
    return TransactionProxyRouter.instance;
  }

  map(): Router {
    this.routes.forEach(route => {
      const handler = new route.handler() as RouterClass
      this.router.use(route.segment, handler.router)
    })
    return this.router;
  }
}

const transactionProxyRouter = TransactionProxyRouter.get();
export { transactionProxyRouter as TransactionProxyRouter };