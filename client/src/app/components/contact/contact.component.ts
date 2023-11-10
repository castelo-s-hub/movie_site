import {ChangeDetectorRef, Component, ElementRef, Renderer2} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  isMenuOpen: boolean = false;

  constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef, private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
