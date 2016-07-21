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
var core_1 = require("@angular/core");
var autocomplete_component_1 = require("./autocomplete.component");
var MainComponent = (function () {
    function MainComponent() {
        this.config = {
            minLength: 3,
            elementId: "hero-name",
            propertyDisplay: ["{0} {1} {2}", 'lastName', 'firstName', 'id'],
            propertySearch: ["firstName", "lastName"],
            propertyInputDisplay: ["{0} {1}", 'id', 'lastName'],
            eventFromComponent: "select-hero-id",
            source: [
                { id: 1, firstName: "Dima", lastName: "Jakimov" },
                { id: 2, firstName: "Dima1", lastName: "Jakimov1" },
                { id: 3, firstName: "Dima2", lastName: "Jakimov2" },
                { id: 4, firstName: "Roman", lastName: "Pichurin" },
                { id: 5, firstName: "Roman1", lastName: "Pichurin1" },
                { id: 6, firstName: "Roman2", lastName: "Pichurin2" }
            ]
        };
    }
    MainComponent = __decorate([
        core_1.Component({
            selector: "main-component",
            templateUrl: "../templates/main.component.template.html",
            directives: [autocomplete_component_1.AutocompleteComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map