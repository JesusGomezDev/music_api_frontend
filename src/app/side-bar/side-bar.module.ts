import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  imports: [CommonModule, SideBarComponent],
  exports: [SideBarComponent]
})
export class SideBarModule {}
