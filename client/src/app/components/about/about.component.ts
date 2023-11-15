import {ChangeDetectorRef, Component, ElementRef, HostListener, Renderer2, ViewEncapsulation} from '@angular/core';
import VanillaTilt from "vanilla-tilt";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent {

  isMenuOpen: boolean = false;
  isPagesTabOpen: boolean = false;
  counter: number = 0;
  counter1: number = 0;
  counter2: number = 0;
  counter3: number = 0;
  counter4: number = 0;
  sec2counter: number = 250;
  sec4counter: number = 1500;

  currentIndex = 0;
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
  ]; // Your carousel items
  currentIndex2 = 0;
  isDragging = false;
  startPosition = 0;
  offset = 0;
  itemWidth = 360; // Width of each carousel item
  margin = 15; // Margin between carousel items

  constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef, private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.vanillaTiltAnimation()

    const totalWidth = this.carouselItems.length * (this.itemWidth + this.margin);
    const carousal = document.querySelector('.carousel-container') as HTMLElement;
    carousal.style.width = totalWidth + 'px';
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

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    let target = event.target as HTMLElement;

    if (!target.matches("a")) {
      this.isPagesTabOpen = false;
      this.cdr.detectChanges();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  pagesTabOpen() {
    this.isPagesTabOpen = !this.isPagesTabOpen;
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

  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startPosition = event.clientX - this.offset;
  }

  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      this.offset = event.clientX - this.startPosition;
      this.cdr.detectChanges();
      this.updateCarouselPosition();
    }
  }

  onMouseUp(): void {
    this.isDragging = false;
    // Calculate the new current index based on the offset
    this.currentIndex2 = Math.round(this.offset / (this.itemWidth + this.margin));
    this.cdr.detectChanges();
    this.updateCarouselPosition();
  }

  updateCarouselPosition(): void {
    const minOffset = 0;
    const maxOffset = -((this.carouselItems.length - 1) * (this.itemWidth + this.margin));

    // Ensure the offset stays within the bounds of the carousel
    this.offset = Math.max(maxOffset, Math.min(minOffset, this.offset));

    // Calculate the new current index based on the offset
    this.currentIndex2 = Math.round(this.offset / (this.itemWidth + this.margin));
    this.cdr.detectChanges();
  }

}
