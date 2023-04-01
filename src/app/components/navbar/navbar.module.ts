import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { CustomTranslateModule } from 'src/app/shared/modules/translate.module';
import { LangModule } from 'src/app/shared/components/lang/lang.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, CustomTranslateModule, LangModule, RouterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
