import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { CustomTranslateModule } from 'src/app/shared/modules/translate.module';
import { LangModule } from '../../shared/components/lang/lang.module';
import { RouterModule } from '@angular/router';
import { PrimeModule } from 'src/app/shared/modules/primeng.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    CustomTranslateModule,
    LangModule,
    RouterModule,
    PrimeModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
