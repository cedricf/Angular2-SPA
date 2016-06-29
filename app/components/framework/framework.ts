import { Component, Output, EventEmitter, ContentChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuComponent } from '../menu/menu'
import { MenuItemComponent } from '../menu/menu.item'


@Component({
  selector: 'ps-framework',
  directives: [MenuComponent, MenuItemComponent],
  styleUrls: ['./app/components/framework/framework.css'],
  templateUrl: './app/components/framework/framework.html',
  inputs: ['title', 'subtitle', 'iconFile']
})

export class FrameworkComponent {
  @ContentChild(MenuComponent) menu: MenuComponent;
  @Output() menuShow = new EventEmitter();

  public title;
  public subtitle;
  public iconFile;

  isMenuButtonVisible = true;
  isMenuVisible = true;

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
    this.menu.setMenuVisible(this.isMenuVisible);

    this.menuShow.emit({
        show: this.isMenuVisible
    });
  }

  showMenu(event) {
    this.menu.setMenuVisible(event.show);
  }

  setMenu(menu: MenuComponent){
    this.menu = menu;
  }

  
}
