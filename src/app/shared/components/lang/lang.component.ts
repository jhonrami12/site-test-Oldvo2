import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Flag } from '../../models/flag.model';
import { dataFlags } from '../../data/flag-supported';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
})
export class LangComponent implements OnInit {
  flags: Flag[] = dataFlags;

  flag: Flag;
  selectedCountry: string;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.flag = this.flags.filter(
      (flg) => flg.name == this.translate.currentLang
    )[0];
  }

  select(event: any): void {
    this.flag = event.value;
    this.translate.use(this.flag.name);
  }
}
