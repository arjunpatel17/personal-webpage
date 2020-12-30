import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  fullBar: boolean = false;
  items: MenuItem[];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event && event.target && event.target.innerWidth) {
      this.fullBar = event.target.innerWidth > 768;
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (document && document.body && document.body.clientWidth) {
      this.fullBar = document.body.clientWidth > 768;
    }
    this.items = [
      { label: 'Profile', icon: 'pi pi-user',
        command: () => {
          this.scrollTo('main');
        }
      },
      { label: 'Experience', icon: 'pi pi-id-card',
        command: () => {
          this.scrollTo('experience');
        }
      },
      { label: 'Education', icon: 'pi pi-pencil',
        command: () => {
          this.scrollTo('education');
        }
      },
      { label: 'Projects', icon: 'pi pi-folder',
        command: () => {
          this.scrollTo('projects');
        }
      }
    ];
  }

  clickHome() {
    this.router.navigate(['/home', {}]);
  }

  scrollTo(where: string) {
    document.getElementById(where).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  }
}
