import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';


//import { Menu } from '../menu/menu';
//import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'ps-framework',
  styleUrls: ['./app/components/framework/framework.css'],
  templateUrl: './app/components/framework/framework.html',
  inputs: ['title', 'subtitle', 'iconFile']
})

export class FrameworkComponent {
  public title;
  public subtitle;
  public iconFile;

  @Output() menuShow = new EventEmitter();

  isMenuButtonVisible = true;
  isMenuVisible = true;

  constructor (){
  }

  onResize(event) {
    this.checkWidth()
    this.broadcastMenuState();
  }

  checkWidth() {
    let width = Math.max(window.outerWidth, window.innerWidth);
    this.isMenuVisible = (width >= 768);
    this.isMenuButtonVisible = !this.isMenuVisible;
  }

  ngAfterContentInit() {
    this.checkWidth();
    this.broadcastMenuState();
  }

  menuButtonClicked(){
    this.isMenuVisible = !this.isMenuVisible;
    this.broadcastMenuState();
  }

  menuItemSelected(){
    this.checkWidth();
    this.broadcastMenuState();
  }

  broadcastMenuState(){
    this.menuShow.emit({
        show: this.isMenuVisible
    });
  }
  
}
