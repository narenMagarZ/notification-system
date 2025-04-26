import { RouterClass } from "../routerClass";

export class OrderRouter extends RouterClass {
  constructor() {
    super();
  }
  handle(): void {
    this.router.route("/")
    .post((req, res) => {});
  }
}