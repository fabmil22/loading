import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouter } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    HomeRouter
  ],
  declarations: [ HomeComponent],

})
export class HomeModule { }
