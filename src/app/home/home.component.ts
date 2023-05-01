import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GetStartedComponent } from './get-started/get-started.component';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DialogService],
})
export class HomeComponent implements AfterViewInit {
  ref: DynamicDialogRef;
  @ViewChild('myVideo') myVideo: any;
  private urlResources = environment.URL_RESOURCES;

  constructor(
    public dialogService: DialogService,
    private translateService: TranslateService
  ) {
    // Actualiza el valor del atributo 'src' del elemento 'video'
    this.updateVideoSrc();

    // Registra 'onLanguageChange' como observador del cambio de idioma
    translateService.onLangChange.subscribe(() => {
      this.onLanguageChange();
    });
  }

  ngAfterViewInit() {
    this.onLanguageChange();
  }

  show() {
    this.translateService
      .get('getStarted.commingSoon')
      .subscribe((traduccion: string) => {
        this.ref = this.dialogService.open(GetStartedComponent, {
          header: traduccion,
          width: '65%',
        });
      });
  }

  updateVideoSrc() {
    console.log('urlResources:' + this.urlResources);
    if (this.myVideo) {
      const lang = this.translateService.currentLang.toUpperCase();
      const videoSrc = `${this.urlResources}videos/vo2vo_${lang}.mp4`;
      const uniqueQueryParam = `?v=${new Date().getTime()}`;
      this.myVideo.nativeElement.src = videoSrc + uniqueQueryParam;
      this.myVideo.nativeElement.load();
    }
  }

  onLanguageChange() {
    // Actualiza el valor del atributo 'src' del elemento 'video'
    this.updateVideoSrc();
  }
}
