import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

export type ClientSize = 'Mobile' | 'Tablet' | 'Small' | 'Med' | 'Large';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  private clientSize: ClientSize;
  private clientSizeSubject: BehaviorSubject<ClientSize> = new BehaviorSubject<ClientSize>('Small');
  public clientSize$: Observable<ClientSize> = this.clientSizeSubject.asObservable();

  constructor(private eventManager: EventManager) { 
    this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
    this.clientSize = this.calculateSize(document.body.clientWidth);
    this.clientSizeSubject.next(this.clientSize);
  }

  calculateSize(clientWidth): ClientSize {
    if (clientWidth < 426) {
      return 'Mobile';
    } else if (clientWidth < 769) {
      return 'Tablet';
    } else if (clientWidth < 1025) {
      return 'Small';
    } else if (clientWidth < 2000) {
      return 'Med';
    } else {
      return 'Large';
    }
  }

  onResize(event: UIEvent) {
    if (event && event.target && (<Window>event.target).innerWidth) {
      this.clientSize = this.calculateSize((<Window>event.target).innerWidth);
      this.clientSizeSubject.next(this.clientSize);
    }
  }
}
