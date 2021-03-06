import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDmhzSs8g-3wr6FCHKQRzj8Og-VTpAfMGg',
  authDomain: 'el-biko.firebaseapp.com',
  databaseURL: 'https://el-biko.firebaseio.com',
  storageBucket: 'el-biko.appspot.com',
  // messagingSenderId: '355970881188',
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
