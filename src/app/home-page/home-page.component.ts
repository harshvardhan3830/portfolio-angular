import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(){}

  openInstagram(){
    window.open("https://www.instagram.com/vardhan.3830/");
  }

  openLinkedIn(){
    window.open("https://www.linkedin.com/in/harshvardhan01/");
  }

  openGithub(){
    window.open("https://github.com/harshvardhan3830")
  }

  openGitLab(){
    window.open("https://gitlab.com/HarshVardhan01")
  }
}
