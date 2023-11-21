import {Component, OnInit} from '@angular/core';
import VanillaTilt from "vanilla-tilt";

@Component({
  selector: 'app-projects-main',
  templateUrl: './projects-main.component.html',
  styleUrls: ['./projects-main.component.scss']
})
export class ProjectsMainComponent implements OnInit{

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
