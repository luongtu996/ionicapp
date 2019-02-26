import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  homeRoot = 'HomePage';
  leaderboardRoot = 'Leaderboard';
  reviewsRoot = 'ReviewPage';
  profileRoot = 'ProfilePage';

  constructor(public navCtrl: NavController) {}
}
