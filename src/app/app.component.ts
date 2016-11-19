import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

import { UserService } from './user.service';
import { ChannelsService } from './channels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private hasSession: Boolean = false;
  constructor(
    public af: AngularFire,
    private user: UserService,
    public channels: ChannelsService) {
    
  }
  ngOnInit(): void {
    this.af.auth.subscribe(auth => {
      this.hasSession = false;
      if (auth) {
        this.user.setId(auth.uid);
        this.user.setName(auth.auth.displayName);
        this.hasSession = true;
      }
    })


  }
}
