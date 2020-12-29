import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  showChild: boolean = false;

  constructor(private router: Router) { }

  onParentClick() {
    this.showChild = true;
    setTimeout(() => {
      this.router.navigate(['/wanted', {}]);
    }, 2000)
  }
}
