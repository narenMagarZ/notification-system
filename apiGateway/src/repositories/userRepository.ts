import { InputUserInterface, UserInterface } from "../interface";
import { BaseRepository } from "./baseRepository";

export class UserRepository extends BaseRepository<InputUserInterface, UserInterface>{
  constructor() {
    super("users");
  }
}