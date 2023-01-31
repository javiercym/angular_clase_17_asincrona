import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], 
  exports: [
    InicioComponent
  ]
})
export class PagesModule { }
