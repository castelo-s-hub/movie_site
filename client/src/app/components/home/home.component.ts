import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit{
  isMenuOpen: boolean = false;
  counter: number = 0;
  sec3animation: boolean = true;
  sec2counter: number = 300;
  sec3position: number = 700;

  videoSrc: SafeResourceUrl = '';
  popupVideo: boolean = false;

  carouselItems = [
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/criteria/img-1.jpg',
      title: 'Care For You',
      date: '2020,Action,Drama'
    },
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/criteria/img-2.jpg',
      title: 'Jeen Leader',
      date: '2020,Action,Drama'
    },
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/criteria/img-3.jpg',
      title: 'Flash Man',
      date: '2020,Action,Drama'
    },
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/criteria/img-4.jpg',
      title: 'Frank Herbert',
      date: '2020,Action,Drama'
    }
  ];
  currentIndex = 0;

  carouselItems2 = [
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/movies/img-1.jpg',
      title: 'Schindler\'s List'
    },
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/movies/img-2.jpg',
      title: 'The Terminator'
    },
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/movies/img-3.jpg',
      title: 'Movie Verse'
    },
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/movies/img-4.jpg',
      title: 'You\'ll Love Us'
    },
    {
      image: 'https://template.wphix.com/dhora-prv/dhora/assets/img/movies/img-5.jpg',
      title: 'Back To The Future'
    }
  ]; // Your carousel items
  currentIndex2 = 0;
  isDragging = false;
  startPosition = 0;
  offset = 0;
  itemWidth = 460; // Width of each carousel item
  margin = 35; // Margin between carousel items

  constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef, private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.vanillaTiltAnimation()
    // Calculate total width of the carousel
    const totalWidth = this.carouselItems2.length * (this.itemWidth + this.margin);
    const carousal = document.querySelector('.carousel-container2') as HTMLElement;
    carousal.style.width = totalWidth + 'px';
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.sec2counter) {
      this.startCounter();
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    let target = event.target as HTMLElement;
    if (!target.matches("path")) {
      this.popupVideo = false;
      this.cdr.detectChanges();
    }
    if (!target.matches(".bar")) {
      this.isMenuOpen = false;
      this.cdr.detectChanges();
    }
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

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  vanillaTiltAnimation() {
    const element = document.querySelector('.sec-3-image') as HTMLElement;
    const element2 = document.querySelectorAll('.div-5-cont-1');
    const element3 = document.querySelector('.sec-9-image-vanilla') as HTMLElement;
    const element4 = document.querySelectorAll('.sec-8-image');

    VanillaTilt.init(element, {
      max: 25,
      speed: 400,
      glare: false,
      'max-glare': 0.5
    });

    // @ts-ignore
    VanillaTilt.init(element2, {
      max: 15,
      speed: 100,
      glare: false,
      'max-glare': 0.5
    })

    VanillaTilt.init(element3, {
      max: 15,
      speed: 100,
      glare: false,
      'max-glare': 0.5
    })

    // @ts-ignore
    VanillaTilt.init(element4, {
      max: 15,
      speed: 100,
      glare: true,
      'max-glare': 0.5
    })
  }

  loadVideo(video: string) {
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(video);
    this.cdr.detectChanges();
    this.popupVideo = true;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
    this.cdr.detectChanges();
    console.log(this.currentIndex);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    this.cdr.detectChanges();
    console.log(this.currentIndex);
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
    const maxOffset = -((this.carouselItems2.length - 1) * (this.itemWidth + this.margin));

    // Ensure the offset stays within the bounds of the carousel
    this.offset = Math.max(maxOffset, Math.min(minOffset, this.offset));

    // Calculate the new current index based on the offset
    this.currentIndex2 = Math.round(this.offset / (this.itemWidth + this.margin));
    this.cdr.detectChanges();
  }
}
