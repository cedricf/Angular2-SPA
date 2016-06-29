import {Component, Output, EventEmitter, Inject} from '@angular/core';
import { FrameworkComponent } from '../framework/framework';
import { MenuItemComponent } from './menu.item';

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

  addMenuItem(menuItem: MenuItemComponent){
    this.menuItems.push(menuItem);
  }

  menuSelected(menuItem: MenuItemComponent){
    this.setActiveElement(menuItem);
    this.menuItemSelected.emit({
        route: menuItem.route,
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
    this.showMenu = show;
  }

}








