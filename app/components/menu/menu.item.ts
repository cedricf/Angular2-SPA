import {Component} from '@angular/core';
import { MenuComponent } from './menu'

@Component({
  selector: 'ps-menu-item',
  inputs: ['label', 'icon', 'route'],
  template: '...'
})
export class MenuItemComponent {
    public label;
    public icon;
    public route;
    
    constructor(menu: MenuComponent){
        menu.addMenuItem(this);
    }

}