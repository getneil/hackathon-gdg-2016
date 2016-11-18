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
  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }
  logout() {
    this.af.auth.logout();
  }
  ngOnInit(): void {
    this.af.auth.subscribe(auth => {
      console.log(auth);
      if (auth) {
        this.title = auth.auth.providerData[0].displayName;
        this.hasSession = true;
      } else {
        this.title = 'App';
        this.hasSession = false;
      }
    })
  }
}
