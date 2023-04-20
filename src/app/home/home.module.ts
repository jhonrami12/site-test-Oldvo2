import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, NavbarModule, RouterModule.forChild(routes), ButtonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
