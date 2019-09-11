import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared.module';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MdjService } from './services/mdj.service';
import { PersonnagesService } from './services/personnages.service';

import * as firebase from 'firebase';

@NgModule({
  declarations: [],
  imports: [
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
  constructor() {
         // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyD9fkuj-4-V9B3Qe2c3TpU5LKIAK8NxkWY",
      authDomain: "enjeu-v3.firebaseapp.com",
      databaseURL: "https://enjeu-v3.firebaseio.com",
      projectId: "enjeu-v3",
      storageBucket: "",
      messagingSenderId: "616273300231",
      appId: "1:616273300231:web:9eae8df262841fe8e0d3a2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
