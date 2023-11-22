import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects-det1',
  templateUrl: './projects-det1.component.html',
  styleUrls: ['./projects-det1.component.scss']
})
export class ProjectsDet1Component implements OnInit{

  challenge:boolean = true
  solution:boolean = false
  result:boolean = false

  constructor(private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
  }

  clickChallenge(){
    this.challenge = true
    this.solution = false
    this.result = false
    this.cdr.detectChanges()
  }
  clickSolution(){
    this.challenge = false
    this.solution = true
    this.result = false
    this.cdr.detectChanges()
  }
  clickResult(){
    this.challenge = false
    this.solution = false
    this.result = true
    this.cdr.detectChanges()
  }
}
