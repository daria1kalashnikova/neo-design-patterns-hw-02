# Homework Assignment: SOLID Design Principles

In real-world projects, poor architecture is often not immediately visible — but over time, it makes systems harder to maintain, test, and extend. This assignment provides an opportunity to practice identifying such issues and improving project structure by applying the SOLID principles. You’ll see how proper abstractions and interfaces can make your code clearer, more flexible, and ready for change.

### Task Description

You are provided with a basic messaging system that intentionally violates SOLID design principles. Your task is to refactor the architecture according to SOLID principles and implement a messaging system that is scalable, maintainable, and modular.

### Expected Outcome

- All messaging channels — Email, SMS, and Push — should be implemented as separate services that share a common interface.
- The NotificationService class should not depend on concrete implementations of these channels.
- The Logger should be injected as a dependency via an interface.
- The User class should no longer contain any messaging logic.
- The main.ts file should clearly demonstrate how to interact with the system via abstractions.

### Compliance with SOLID Principles

#### SRP (Single Responsibility Principle):

- User is responsible only for holding user data.
- Each Notification class is responsible for a single communication channel.
- NotificationService coordinates the use of different channels.
- Logger is solely responsible for logging.

#### OCP (Open/Closed Principle):

- New channels can be added by creating a new class that implements INotificationChannel and using addChannel to register it.

#### LSP (Liskov Substitution Principle):

- All channels (EmailNotification, SMSNotification, PushNotification) implement INotificationChannel and can be used interchangeably by NotificationService.

#### ISP (Interface Segregation Principle):

- INotificationChannel contains only one method: send.
- INotificationService provides a minimal interface (addChannel, notify).
- ILogger provides only the log method.

#### DIP (Dependency Inversion Principle):

- All dependencies are injected via interfaces (ILogger, INotificationChannel).
- NotificationService depends on the abstraction INotificationChannel, not on concrete implementations.
