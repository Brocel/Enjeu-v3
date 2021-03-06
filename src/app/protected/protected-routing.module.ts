import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableJeuComponent } from './table-jeu/table-jeu.component';

const routes: Routes = [
  { path: 'protected/table-jeu', component: TableJeuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
