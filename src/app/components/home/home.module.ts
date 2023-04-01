import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../navbar/navbar.module';
import { RouterModule, Routes } from '@angular/router';
import { HowWorksHomeComponent } from '../how-works-home/how-works-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent,HowWorksHomeComponent],
  imports: [CommonModule, NavbarModule, RouterModule.forChild(routes)],
  exports: [HomeComponent],
})
export class HomeModule {}
