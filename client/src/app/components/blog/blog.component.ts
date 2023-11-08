import {ChangeDetectorRef, Component, ElementRef, HostListener, Renderer2, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import VanillaTilt from "vanilla-tilt";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent {

  isMenuOpen: boolean = false;

  constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef, private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
