import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicModule,
    ProtectedModule
  ],
  exports: [
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
