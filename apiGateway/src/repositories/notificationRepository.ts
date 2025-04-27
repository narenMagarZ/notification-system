import { InputNotificationInterface, NotificationInterface } from "../interface";
import { BaseRepository } from "./baseRepository";

export class NotificationRepository extends BaseRepository<InputNotificationInterface, NotificationInterface>{
  constructor() {
    super("notifications");
  }
}