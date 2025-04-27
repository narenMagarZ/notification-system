import { InputUserInterface, UserInterface } from "../interface";
import { UserRepository } from "../repositories";

export class UserService {
  private repository: UserRepository;
  constructor() {
    this.repository = new UserRepository();
  }

  public async create(input: Partial<InputUserInterface>): Promise<UserInterface> {
    return this.repository.create(input);
  }

  public async findByPk(id: number): Promise<UserInterface> {
    return this.repository.findByPk(id);
  }
}