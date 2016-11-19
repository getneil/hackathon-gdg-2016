import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

import { UserService } from '../user.service';

@Component({
  selector: 'app-syncphony',
  templateUrl: './syncphony.component.html',
  styleUrls: ['./syncphony.component.css']
})
export class SyncphonyComponent implements OnInit {

  private id = '';
  private player;
  private ytEvent;
  private videoKeys;
  private isOwner = false;
  private playing;
  private raw;
  constructor(
    public af:AngularFire,
    private route: ActivatedRoute,
    public user: UserService, ) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      if (id) {
        this.videoKeys = this.af.database.object(`/channels/${id}`);
        this.videoKeys.subscribe((data) => {
          this.raw = data;
          // https://www.youtube.com/watch?v=pgDE2DOICuc
          this.isOwner = data.ownerId === this.user.id
          const youtube = data.youtube ? data.youtube.split('=') : '';
          if (youtube.length === 2) {
            this.id = youtube[1];
          }
          console.log(this.id, data.playStart, this.playing);
          if (this.id && data.playStart && !this.playing) {
            const now = (new Date()).getTime();
            const left = data.playStart - now;
            this.playing = setTimeout(() => {
              this.startVideo();
            }, left);
          }
        })
      }
    });
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  startVideo() {
    this.player.playVideo();
  }
  playVideo() {
    const keys = ['title','description','youtube','poster','ownerId'];
    const update = {
      playStart: ((new Date()).getTime() + 10000),
    };
    keys.forEach((k) => {
      update[k] = this.raw[k];
    });
    this.videoKeys.set(update);
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
