import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewPage } from './review';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
      ReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewPage),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ReviewModule {
}
