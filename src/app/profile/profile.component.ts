import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

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

  ngAfterViewInit() {
    setTimeout(() => {
      let main = document.getElementById('main');
      for (let i = 0; i < main.children.length; i++) {
        main.children[i].classList.add("come-in");
      }
      this.visible(document.getElementById('experience'));
      this.visible(document.getElementById('education'));
    }, 0)
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

  onWindowScroll(event) {
    if (event.target.classList.contains("on-scrollbar") === false) {
      event.target.classList.add("on-scrollbar");
      this.debounce(event, 1000);
    }

    setTimeout(() => {
      this.visible(document.getElementById('main'));
      this.visible(document.getElementById('experience'));
      this.visible(document.getElementById('education'));
      this.visible(document.getElementById('projects'));
      this.visible(document.getElementById('contact'));
    }, 0);
  }

  debounce(event, delay) {
    let method;
    clearTimeout(method);
    method = setTimeout(function(){
      event.target.classList.remove("on-scrollbar");
    }, delay);
  }

  visible(ele): boolean {
    let bounding = ele.getBoundingClientRect();
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      for (let i = 0; i < ele.children.length; i++) {
        ele.children[i].classList.add("come-in");
      }
      return true;
    } else {
      // for (let i = 0; i < ele.children.length; i++) {
      //   ele.children[i].classList.remove("come-in");
      // }
      return false;
    }

  }
}
