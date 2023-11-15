import {ChangeDetectorRef, Component, ElementRef, HostListener, Renderer2} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  isScrolled: boolean = false;
  isMenuOpen: boolean = false;
  isPagesTabOpen: boolean = false;

  constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef, private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 200;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    let target = event.target as HTMLElement;

    if (!target.matches(".bar")) {
      this.isMenuOpen = false;
      this.cdr.detectChanges();
    }
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
}
