import {Component, HostListener, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.sec2counter) {
      this.startCounter();
      console.log(scrollPosition)
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
}
