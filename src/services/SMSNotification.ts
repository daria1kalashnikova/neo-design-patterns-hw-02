import { INotificationChannel, ILogger } from "../core/interfaces";
import { User } from "../models/User";

export class SMSNotification implements INotificationChannel {
  constructor(private logger: ILogger) {}

  send(user: User, message: string): void {
    this.logger.log(`Sending SMS to ${user.getPhone()}`);
    console.log(`SMS sent to ${user.getPhone()}: ${message}`);
  }
}
