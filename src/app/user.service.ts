import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  _id = 0;
  _name = '';
  constructor() { }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  setId(newId) {
    this._id = newId;
  }
  setName(displayName) {
    this._name = displayName;
  }
}
