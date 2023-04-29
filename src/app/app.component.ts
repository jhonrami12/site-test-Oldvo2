import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANGUAGE } from './shared/models/constants';
import { dataFlags } from './shared/data/flag-supported';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'siteVo2vo.ai';

  constructor(private translate: TranslateService) {
    // Detecta el idioma del navegador
    const browserLang = translate.getBrowserLang();

    // Establece el idioma acorde al usuario
    translate.setDefaultLang(DEFAULT_LANGUAGE);
    translate.use(
      dataFlags.findIndex((flg) => flg.name == browserLang) != -1
        ? (browserLang as string)
        : DEFAULT_LANGUAGE
    );
  }
}
