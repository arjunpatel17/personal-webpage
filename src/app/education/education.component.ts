import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemingService } from '../theming.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit, AfterViewInit, OnDestroy {

  _unsubscribe: Subject<any> = new Subject();

  fullSize: boolean = false;

  constructor(private themingService: ThemingService) { }

  ngOnInit(): void {
    this.themingService.clientSize$.pipe(takeUntil(this._unsubscribe)).subscribe((size) => {
      this.fullSize = size === 'Med' || size === 'Large';
    });
  }

  ngAfterViewInit() {
    // setTimeout(() => {  
    //   let ele = document.getElementsByTagName('p-card');
    //   for (let i = 0; i < ele.length; i++) {
    //     if ((i/2 === 1) || (i/2 === 0)) ele[i].classList.add("come-in-even");
    //     else ele[i].classList.add("come-in-odd");
    //   }
    // }, 500);
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

}
