import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private hasSession: Boolean = false;
  private displayName: String = '';
  private photo: String = '';
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
      this.displayName = '';
      this.hasSession = false;
      if (auth) {
        this.displayName = auth.auth.providerData[0].displayName;
        this.photo = auth.auth.providerData[0].photoURL;
        this.hasSession = true;
      }
    })
  }

}
