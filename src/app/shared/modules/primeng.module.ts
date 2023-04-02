import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [DropdownModule, SidebarModule, ButtonModule],
  exports: [DropdownModule, SidebarModule, ButtonModule],
})
export class PrimeModule {}
