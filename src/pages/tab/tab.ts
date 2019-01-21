import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {


  homeRoot = 'HomePage';
  leaderboardRoot = 'Leaderboard';
  // reviewsRoot = 'ReviewsPage';
  profileRoot = 'ProfilePage';

  constructor(public navCtrl: NavController) {}
}
