import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/loader/loader.component';
import { NotificationComponent } from './shared/notification/notification.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent, NotificationComponent],
  template:`
  <app-notification/>
  <app-loader/>
  <router-outlet />`,  
})
export class AppComponent {}
