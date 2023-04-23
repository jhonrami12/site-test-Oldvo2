import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AvatarModule } from 'primeng/avatar';
import { CustomTranslateModule } from 'src/app/shared/modules/translate.module';
import { LangModule } from '../shared/components/lang/lang.module';


@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule,AvatarModule,CustomTranslateModule,LangModule],
  exports: [FooterComponent],
})
export class FooterModule {}
