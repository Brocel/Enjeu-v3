import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from  '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule, //préparation de la factorisation du CommonModule
    ReactiveFormsModule
  ]
})
export class SharedModule { }
