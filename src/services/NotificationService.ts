import { INotificationService, INotificationChannel } from "../core/interfaces";
import { User } from "../models/User";

export class NotificationService implements INotificationService {
  private channels: INotificationChannel[] = [];

  addChannel(channel: INotificationChannel): void {
    this.channels.push(channel);
  }

  notify(user: User, message: string): void {
    this.channels.forEach((channel) => channel.send(user, message));
  }

  sendEmail(user: User, message: string): void {
    this.notify(user, message);
  }

  sendSMS(user: User, message: string): void {
    this.notify(user, message);
  }

  sendPush(user: User, message: string): void {
    this.notify(user, message);
  }
}
