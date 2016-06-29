"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MenuComponent = (function () {
    function MenuComponent() {
        this.menuItems = [];
        this.activeElement = null;
        this.showMenu = true;
        this.menuItemSelected = new core_1.EventEmitter();
    }
    MenuComponent.prototype.addMenuItem = function (menuItem) {
        this.menuItems.push(menuItem);
    };
    MenuComponent.prototype.menuSelected = function (menuItem) {
        this.setActiveElement(menuItem);
        this.menuItemSelected.emit({
            route: menuItem.route,
        });
    };
    MenuComponent.prototype.setActiveElement = function (activeMenuItem) {
        this.activeElement = activeMenuItem;
    };
    MenuComponent.prototype.getActiveElement = function () {
        return this.activeElement;
    };
    MenuComponent.prototype.isActive = function (menuItem) {
        return this.activeElement === menuItem;
    };
    MenuComponent.prototype.setMenuVisible = function (show) {
        this.showMenu = show;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MenuComponent.prototype, "menuItemSelected", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'ps-menu',
            styleUrls: ['./app/components/menu/menu.css'],
            templateUrl: './app/components/menu/menu.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.js.map