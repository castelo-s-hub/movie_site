import {Component, HostListener, OnInit, ChangeDetectorRef, Renderer2, ElementRef} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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

  constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef, private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.vanillaTiltAnimation()
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
    // console.log(event.target);
    // console.log(!this.elementRef.nativeElement.contains(event.target));
    let target = event.target as HTMLElement;
    if (!target.matches("path")) {
      this.popupVideo = false;
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
    const element3 = document.querySelector('.sec-9-image-vanilla');

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

    // @ts-ignore
    VanillaTilt.init(element3, {
      max: 15,
      speed: 100,
      glare: false,
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
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }
}
