import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';



@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, SignupComponent, SigninComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
