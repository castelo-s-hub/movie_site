import {Component, OnInit} from '@angular/core';
import VanillaTilt from "vanilla-tilt";

@Component({
  selector: 'app-projects-main',
  templateUrl: './projects-main.component.html',
  styleUrls: ['./projects-main.component.scss']
})
export class ProjectsMainComponent implements OnInit{

  carouselItems = [
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/play/img-1.jpg',
      title: 'Highway',
      tag: 'Adventure / 182 Mins'
    },
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/play/img-2.jpg',
      title: 'Stallion',
      tag: 'Adventure / 182 Mins'
    },
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/play/img-3.jpg',
      title: 'Warrior',
      tag: 'Adventure / 182 Mins'
    },
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/play/img-4.jpg',
      title: 'Dark',
      tag: 'Adventure / 182 Mins'
    },
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/play/img-5.jpg',
      title: 'Future Destiny',
      tag: 'Adventure / 182 Mins'
    }
  ];

  vanillaTiltAnimation() {
    const element = document.querySelectorAll('.card');

    // @ts-ignore
    VanillaTilt.init(element, {
      max: 10,
      speed: 400,
      glare: false,
      'max-glare': 0.5
    });
  }

  ngOnInit(): void {
    this.vanillaTiltAnimation();}
}