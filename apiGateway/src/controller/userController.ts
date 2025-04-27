import { Request, Response, NextFunction } from "express";
import { UserService } from "../services";

export class UserController {
  
  public static async createUser(req: Request, res: Response, next: NextFunction) {
    const user = new UserService().create(req.body)
    res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: user
    })
  }

  public static async getUser(req: Request, res: Response, next: NextFunction) {
    const user = new UserService().findByPk(+req.params.id)
    res.status(201).json({
      success: true,
      message: "User fetched successfully.",
      data: user
    })
  }

}