import { Component, ViewChild } from '@angular/core';
import { FrameworkComponent } from './components/framework/framework'
import { MenuComponent } from './components/menu/menu'
import { MenuItemComponent } from './components/menu/menu.item'


@Component({
  selector: 'my-app',
  directives: [FrameworkComponent, MenuComponent, MenuItemComponent],
  templateUrl: './app/app.component.html'
})
export class AppComponent { 
  @ViewChild(MenuComponent) menuComponent: MenuComponent;
  @ViewChild(FrameworkComponent) frameworkComponent: FrameworkComponent;
  
  changeRoute(event) {
    console.log(event);
    this.frameworkComponent.menuItemSelected()
  }
  
  showMenu(event) {
    console.log("App: " + event);
    this.menuComponent.setMenuVisible(event.show);
  }

}

