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
var AppComponent = (function () {
    function AppComponent() {
        // This is basically the controller for the above templaate
        this.message = 'hello!';
        this.users = [
            { id: 28, name: 'Rawley', username: 'gorillawit' },
            { id: 26, name: 'Nick', username: 'whatnicktweets' },
            { id: 30, name: 'Ozzie', username: 'hollylawly' },
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<header>\n\t\t<nav class=\"navbar navbar-inverse\">\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<a href=\"/\" class=\"navbar-brand\">My Angular 2 App!!</a>\n\t\t\t</div>\n\t\t</nav>\n\t</header>\n\t<main>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4\">\n\t\t<div *ngIf=\"users\">\n\t\t\t<ul class=\"list-group users-list\">\n\t\t\t\t<!-- new syntax for a structural directive is a star (*ngIf=\"\"),\n\t\t\t\tnew syntax for an event is parentheses (click)=\"selectUser(user)\"\n\t\t\t\tnote: the click event is just a default Bootstrap event (i think)-->\n\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let user of users\" (click)=\"selectUser(user)\">\n\t\t\t\t\t{{user.name}} ({{user.username}})\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-8\">\n\t\t\t<div class=\"jumbotron\">\n\t\t\t\t<h1>Welcome to Our App!</h1>\n\t\t\t\t<p>{{message}}</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t</main>\n\t<footer class=\"text-center\">\n\t\tCopyright &copy; 2016\n\t</footer>\n\t",
            styles: ["\n\t\t.jumbotron { box-shadow: 0 2px 0 rgba(0,0,0,.2); }\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map