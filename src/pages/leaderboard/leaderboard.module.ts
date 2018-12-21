import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Leaderboard } from './leaderboard';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
      Leaderboard,
  ],
  imports: [
    IonicPageModule.forChild(Leaderboard),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LeaderboardModule {

    public username: string;
    public password: string;

    private isUsernameValid: boolean = true;
    private isPasswordValid: boolean = true;

    constructor() {}

    onEvent = (event: string): void => {
        if (event == "onLogin" && !this.validate()) {
            return ;
        }

    }

    validate():boolean {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.username ||this.username.length == 0) {
            this.isUsernameValid = false;
        }

        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }

        return this.isPasswordValid && this.isUsernameValid;
    }

}
