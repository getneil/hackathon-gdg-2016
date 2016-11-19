import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { EditorComponent } from './editor/editor.component';
import { SyncphonyComponent } from './syncphony/syncphony.component';

import { UserService } from './user.service';
import { ChannelsService } from './channels.service';

import { AppRoutingModule }     from './app-routing.module';

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
    LoginComponent,
    ListComponent,
    EditorComponent,
    SyncphonyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    UserService,
    ChannelsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
