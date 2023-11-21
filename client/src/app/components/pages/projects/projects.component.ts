import {ChangeDetectorRef, Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

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
