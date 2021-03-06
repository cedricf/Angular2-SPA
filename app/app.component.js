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
var framework_1 = require('./components/framework/framework');
var menu_1 = require('./components/menu/menu');
var menu_item_1 = require('./components/menu/menu.item');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.changeRoute = function (event) {
        console.log(event);
        this.frameworkComponent.menuItemSelected();
    };
    __decorate([
        core_1.ViewChild(framework_1.FrameworkComponent), 
        __metadata('design:type', framework_1.FrameworkComponent)
    ], AppComponent.prototype, "frameworkComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [framework_1.FrameworkComponent, menu_1.MenuComponent, menu_item_1.MenuItemComponent],
            templateUrl: './app/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map