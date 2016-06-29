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
var menu_1 = require('../menu/menu');
var menu_item_1 = require('../menu/menu.item');
var FrameworkComponent = (function () {
    function FrameworkComponent() {
        this.menuShow = new core_1.EventEmitter();
        this.isMenuButtonVisible = true;
        this.isMenuVisible = true;
    }
    FrameworkComponent.prototype.onResize = function (event) {
        this.checkWidth();
        this.broadcastMenuState();
    };
    FrameworkComponent.prototype.checkWidth = function () {
        var width = Math.max(window.outerWidth, window.innerWidth);
        this.isMenuVisible = (width >= 768);
        this.isMenuButtonVisible = !this.isMenuVisible;
    };
    FrameworkComponent.prototype.ngAfterContentInit = function () {
        this.checkWidth();
        this.broadcastMenuState();
    };
    FrameworkComponent.prototype.menuButtonClicked = function () {
        this.isMenuVisible = !this.isMenuVisible;
        this.broadcastMenuState();
    };
    FrameworkComponent.prototype.menuItemSelected = function () {
        this.checkWidth();
        this.broadcastMenuState();
    };
    FrameworkComponent.prototype.broadcastMenuState = function () {
        this.menu.setMenuVisible(this.isMenuVisible);
        this.menuShow.emit({
            show: this.isMenuVisible
        });
    };
    FrameworkComponent.prototype.showMenu = function (event) {
        this.menu.setMenuVisible(event.show);
    };
    FrameworkComponent.prototype.setMenu = function (menu) {
        this.menu = menu;
    };
    __decorate([
        core_1.ContentChild(menu_1.MenuComponent), 
        __metadata('design:type', menu_1.MenuComponent)
    ], FrameworkComponent.prototype, "menu", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FrameworkComponent.prototype, "menuShow", void 0);
    FrameworkComponent = __decorate([
        core_1.Component({
            selector: 'ps-framework',
            directives: [menu_1.MenuComponent, menu_item_1.MenuItemComponent],
            styleUrls: ['./app/components/framework/framework.css'],
            templateUrl: './app/components/framework/framework.html',
            inputs: ['title', 'subtitle', 'iconFile']
        }), 
        __metadata('design:paramtypes', [])
    ], FrameworkComponent);
    return FrameworkComponent;
}());
exports.FrameworkComponent = FrameworkComponent;
//# sourceMappingURL=framework.js.map