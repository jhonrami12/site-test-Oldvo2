import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CustomTranslateModule } from 'src/app/shared/modules/translate.module';
import { LangModule } from '../shared/components/lang/lang.module';
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
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CustomTranslateModule,
    LangModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
