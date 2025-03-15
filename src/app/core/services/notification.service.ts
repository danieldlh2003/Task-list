import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface NotificationData {
  message: string;
  backgroundColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<NotificationData | null>(null);
  notification$ = this.notificationSubject.asObservable();

  show(message: string, backgroundColor: string = '#333') {
    this.notificationSubject.next({ message, backgroundColor });
    setTimeout(() => this.notificationSubject.next(null), 3000);
  }
}