import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { EditorComponent } from './editor/editor.component';
import { SyncphonyComponent } from './syncphony/syncphony.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '',  component: ListComponent },
  { path: 'new', component: EditorComponent },
  { path: 'syncphony/:id', component: SyncphonyComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
