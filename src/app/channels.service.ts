import { Injectable, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class ChannelsService {

  constructor(public af: AngularFire, ) { }

  ngOnInit(): void {
    this.af.auth.subscribe(auth => {
      console.log('chan',auth)
    })
  }
}
