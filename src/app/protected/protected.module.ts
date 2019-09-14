import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { PersonnagesComponent } from './personnages/personnages.component';
import { PersonnageComponent } from './personnages/personnage/personnage.component';
import { CreationPersonnageComponent } from './personnages/creation-personnage/creation-personnage.component';
import { MdjListComponent } from './mdj-list/mdj-list.component';
import { SingleMdjComponent } from './mdj-list/single-mdj/single-mdj.component';
import { GameConfigComponent } from './mdj-list/game-config/game-config.component';
import { TableJeuComponent } from './table-jeu/table-jeu.component';//calquer sur home todo


@NgModule({
  declarations: [PersonnagesComponent, PersonnageComponent, CreationPersonnageComponent, MdjListComponent, SingleMdjComponent, GameConfigComponent, TableJeuComponent],
  imports: [
    SharedModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
