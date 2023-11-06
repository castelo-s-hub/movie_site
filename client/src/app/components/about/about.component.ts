import {Component, HostListener, ViewEncapsulation} from '@angular/core';
import VanillaTilt from "vanilla-tilt";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent {

  isMenuOpen: boolean = false;
  counter: number = 0;
  counter1: number = 0;
  counter2: number = 0;
  counter3: number = 0;
  counter4: number = 0;
  sec2counter: number = 250;
  sec4counter: number = 1500;

  constructor() {
  }

  ngOnInit() {
    this.vanillaTiltAnimation()
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log(scrollPosition)

    if (scrollPosition >= this.sec2counter) {
      this.startCounter();
    }

    if (scrollPosition >= this.sec4counter) {
      this.startSec4Counter();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  startCounter(): void {
    const interval = setInterval(() => {
      if (this.counter < 150) {
        this.counter++;
      } else {
        clearInterval(interval);
      }
    }, 50); // You can adjust the interval based on your preference
  }

  startSec4Counter(): void {
    const interval1 = setInterval(() => {
      if (this.counter1 < 200) {
        this.counter1++;
      } else {
        clearInterval(interval1);
      }
    }, 50);

    const interval2 = setInterval(() => {
      if (this.counter2 < 20) {
        this.counter2++;
      } else {
        clearInterval(interval2);
      }
    }, 500);

    const interval3 = setInterval(() => {
      if (this.counter3 < 10) {
        this.counter3++;
      } else {
        clearInterval(interval3);
      }
    }, 700);

    const interval4 = setInterval(() => {
      if (this.counter4 < 500) {
        this.counter4++;
      } else {
        clearInterval(interval4);
      }
    }, 40);
  }

  vanillaTiltAnimation() {
    const element = document.querySelector('.sec-3-image') as HTMLElement;

    VanillaTilt.init(element, {
      max: 25,
      speed: 400,
      glare: false,
      'max-glare': 0.5
    });
  }

}
