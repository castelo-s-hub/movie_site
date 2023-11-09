import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Blog1Component {
  play = false;

  playVideo() {
    this.play = !this.play;
    const iframe = document.querySelector('iframe');
    if (this.play){
      iframe!.style.display = 'block';
    } else {
      iframe!.style.display = 'none';
    }
  }
}
