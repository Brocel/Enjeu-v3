import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { ReactiveFormsModule } from  '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared.module';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MdjService } from './services/mdj.service';
import { PersonnagesService } from './services/personnages.service';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    PublicModule,
    ProtectedModule
  ],
  exports: [
  ],
  providers: [
    AuthService,
    AuthGuardService,
    MdjService,
    PersonnagesService
  ]
})
export class CoreModule {
  //Importer le core uniquement dans app.module
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
   if (parentModule) {
    throw new Error('CoreModule is already loaded.');
   }
  }
}
