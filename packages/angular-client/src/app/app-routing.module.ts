import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNoteComponent } from './list-note/list-note.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

const routes: Routes = [
  {
    path: "list",
    component: ListNoteComponent
  }, {
    path: "add",
    component: AddNoteComponent
  }, {
    path: "edit/:id",
    component: EditNoteComponent
  }, {
    path: "**",
    pathMatch: "full",
    redirectTo: "/list"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
