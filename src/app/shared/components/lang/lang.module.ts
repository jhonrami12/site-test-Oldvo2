import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangComponent } from './lang.component';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from '../../modules/primeng.module';
import { CustomTranslateModule } from 'src/app/shared/modules/translate.module';

@NgModule({
  declarations: [LangComponent],
  imports: [CommonModule, PrimeModule, FormsModule, ReactiveFormsModule,CustomTranslateModule],
  exports: [LangComponent],
  providers: [TranslateService],
})
export class LangModule {}
