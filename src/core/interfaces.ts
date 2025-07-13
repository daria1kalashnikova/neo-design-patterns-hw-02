import { User } from "../models/User";

export interface INotificationChannel {
  send(user: User, message: string): void;
}

export interface ILogger {
  log(message: string): void;
}

export interface INotificationService {
  addChannel(channel: INotificationChannel): void;
  notify(user: User, message: string): void;
}
