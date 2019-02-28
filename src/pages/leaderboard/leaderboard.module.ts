import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Leaderboard } from './leaderboard';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
// import { CalendarModule } from "ion2-calendar";



@NgModule({
  declarations: [
      Leaderboard,
  ],
  imports: [
    IonicPageModule.forChild(Leaderboard),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // CalendarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LeaderboardModule {

    public username: string;
    public password: string;

    private isUsernameValid: boolean = true;
    private isPasswordValid: boolean = true;

    constructor() {}
}
