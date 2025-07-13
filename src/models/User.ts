export class User {
  constructor(
    private email: string,
    private phone: string,
    private deviceToken: string
  ) {}

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }

  getDeviceToken(): string {
    return this.deviceToken;
  }
}
