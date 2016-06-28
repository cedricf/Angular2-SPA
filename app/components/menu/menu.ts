import {Component, Output, EventEmitter} from '@angular/core';
import { MenuItemComponent } from './menu.item'

@Component({
  selector: 'ps-menu',
  styleUrls: ['./app/components/menu/menu.css'],
  templateUrl: './app/components/menu/menu.html'
})
export class MenuComponent {
  menuItems: MenuItemComponent[] = [];
  activeElement: MenuItemComponent = null;
  public showMenu: boolean = true;

  @Output() menuItemSelected = new EventEmitter();

  constructor(){
//    console.log("test");
  }
 
  addMenuItem(menuItem: MenuItemComponent){
    this.menuItems.push(menuItem);
  }

  menuSelected(menuItem: MenuItemComponent){
    this.setActiveElement(menuItem);
    this.menuItemSelected.emit({
        route: menuItem.route;
    });
  }
    
  setActiveElement(activeMenuItem: MenuItemComponent) {
    this.activeElement = activeMenuItem;
  }

  getActiveElement(){
    return this.activeElement;
  }

  isActive(menuItem){
    return this.activeElement === menuItem;
  }

  setMenuVisible(show:boolean) {
    console.log(show);
    this.showMenu = show;
  }

}








