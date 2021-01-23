import { AfterViewInit, Component, OnInit } from '@angular/core';

export type Skills = {
  name: string;
  value: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {

  skills: Skills[];

  constructor() { 
    this.skills = [
      { name: 'HTML', value: 0 },
      { name: 'CSS', value: 0 },
      { name: 'Angular', value: 0 },
      { name: 'React', value: 0 },
      { name: 'JavaScript', value: 0 },
      { name: 'C++', value: 0 },
      { name: 'GIT', value: 0 },
      { name: 'C', value: 0 },
      { name: 'Matlab', value: 0 },
      { name: 'Microcontroller', value: 0 }
    ];
  }

  ngOnInit(): void {
    setTimeout(() => {
      let main = document.getElementsByClassName('summary')[0];
      for (let i = 0; i < main.children.length; i++) {
        main.children[i].classList.add("oct");
      }
    }, 500);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.skills.forEach(skill => {
        if (skill.name === 'React') skill.value = 50;
        else if (skill.name === 'JavaScript' 
        || skill.name === 'C++' 
        || skill.name === 'C'
        || skill.name === 'Microcontroller') skill.value = 75;
        else skill.value = 100;
      })
    }, 0);
  }

}
