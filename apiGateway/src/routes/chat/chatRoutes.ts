import { RouterClass } from "../routerClass";

export class ChatRouter extends RouterClass {
  constructor() {
    super();
  }
  handle(): void {
    this.router.route("/")
    .post((req, res) => {});
  }
}