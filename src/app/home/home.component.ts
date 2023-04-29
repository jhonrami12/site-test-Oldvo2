import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GetStartedComponent } from './get-started/get-started.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DialogService],
})
export class HomeComponent {
  ref: DynamicDialogRef;

  constructor(
    public dialogService: DialogService,
    private translateService: TranslateService
  ) {}

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
}
