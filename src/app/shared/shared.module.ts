import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, //préparation de la factorisation du CommonModule
  ]
})
export class SharedModule { }
