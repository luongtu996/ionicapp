import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalConfigPage } from "./config";

@NgModule({
  declarations: [
    ModalConfigPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalConfigPage),
  ],
})
export class ModalConfigPageModule {}
