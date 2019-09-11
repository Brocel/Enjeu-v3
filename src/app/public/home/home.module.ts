import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';



@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, SignupComponent, SigninComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
