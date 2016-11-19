import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  private hasSession: Boolean = false;
  items: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
  }
}
