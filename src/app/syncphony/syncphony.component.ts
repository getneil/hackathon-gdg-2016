import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syncphony',
  templateUrl: './syncphony.component.html',
  styleUrls: ['./syncphony.component.css']
})
export class SyncphonyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  id = 'HL1UzIK-flA';
  private player;
  private ytEvent;

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.seekTo(45, true);
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
