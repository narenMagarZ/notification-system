import { RouterClass } from "../routerClass";

export class TransactionRouter extends RouterClass {
  constructor() {
    super();
  }
  handle(): void {
    this.router.route("/")
    .post((req, res) => {});
  }
}