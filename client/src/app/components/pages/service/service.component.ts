import {ChangeDetectorRef, Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  isMenuOpen: boolean = false;
  isPagesTabOpen: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    let target = event.target as HTMLElement;

    if (!target.matches("a")) {
      this.isPagesTabOpen = false;
      this.cdr.detectChanges();
    }
  }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  pagesTabOpen() {
    this.isPagesTabOpen = !this.isPagesTabOpen;
  }
}
