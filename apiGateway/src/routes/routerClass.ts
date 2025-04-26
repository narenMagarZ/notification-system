import { Router } from "express";

export abstract class RouterClass {
  public router: Router

  public constructor() {
    this.router = Router();
    this.handle();
  }

  public handle(): void {}
}