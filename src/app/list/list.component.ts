import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private channels: Observable<any[]>;
  private hasSession: Boolean = false;
  constructor(public af: AngularFire) {
    this.channels = af.database.list('/channels');
  }
  ngOnInit(): void {
    this.af.auth.subscribe(auth => {
      this.hasSession = false;
      if (auth) {
        this.hasSession = true;
      }
    })
  }
}
