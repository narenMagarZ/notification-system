import { NotificationRepository } from "../repositories";

export class NotificationService {
  private repository: NotificationRepository;
  constructor() {
    this.repository = new NotificationRepository();
  }
}