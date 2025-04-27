import { InputNotificationTemplateInterface, NotificationTemplateInterface } from "../interface";
import { BaseRepository } from "./baseRepository";

export class NotificationTemplatesRepository extends BaseRepository<InputNotificationTemplateInterface, NotificationTemplateInterface>{
  constructor() {
    super("notification_templates");
  }
}