import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { UserService } from '../user.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  title: String = '';
  description: String = '';
  youtube: String = '';

  constructor(
    public af: AngularFire,
    public user: UserService,
    private router: Router) {
  }
  ngOnInit() {
  }
  submit() {
    const keys = ['title','description','youtube'];
    const data = {
      ownerId: this.user.id,
      poster: this.user.name,
    };
    keys.forEach((k) => {
      data[k] = this[k];
    });
    const nd = this.af.database.list('/channels').push(data)
      .then((newData) => {
        const id = newData.path.o[1];
        this.router.navigate(['/syncphony',id]);
      });
  }
}
