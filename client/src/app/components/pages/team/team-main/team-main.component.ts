import { Component } from '@angular/core';

@Component({
  selector: 'app-team-main',
  templateUrl: './team-main.component.html',
  styleUrls: ['./team-main.component.scss']
})
export class TeamMainComponent {

  cardList = [
    {
      name: 'Adward collin',
      post: 'Flim Assistant',
      img: 'https://template.wphix.com/dhora-prv/dhora/assets/img/team/img-1.jpg',
      fb: 'www.facebook.com',
      tw: 'www.twitter.com',
      inst: 'www.instagram.com'
    },
    {
      name: 'Adward collin',
      post: 'Flim Assistant',
      img: 'https://template.wphix.com/dhora-prv/dhora/assets/img/team/img-1.jpg',
      fb: 'www.facebook.com',
      tw: 'www.twitter.com',
      inst: 'www.instagram.com'
    }
  ]

}
