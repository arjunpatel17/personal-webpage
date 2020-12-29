import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wanted',
  templateUrl: './wanted.component.html',
  styleUrls: ['./wanted.component.scss']
})
export class WantedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLearnMoreClick() {
    this.router.navigate(['/profile', {}]);
  }
}
