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
var event_service_1 = require("./event.service");
var autocomplete_component_1 = require("./autocomplete.component");
var MainComponent = (function () {
    function MainComponent(eventService) {
        this.eventService = eventService;
        this.config = {
            minLength: 3,
            elementId: "hero-name",
            propertyDisplay: ["{0} {1} {2}", 'lastName', 'firstName', 'id'],
            propertySearch: ["firstName", "lastName"],
            propertyInputDisplay: ["{0} {1}", 'id', 'lastName'],
            propertyToSort: "lastName",
            eventFromComponent: "select-person",
            source: [
                { id: 1, firstName: "Dima", lastName: "Jakimov" },
                { id: 2, firstName: "Dima1", lastName: "Jakimov1" },
                { id: 3, firstName: "Dima2", lastName: "Jakimov2" },
                { id: 4, firstName: "Dima3", lastName: "Jakimov3" },
                { id: 5, firstName: "Dima4", lastName: "Jakimov4" },
                { id: 6, firstName: "Dima5", lastName: "Jakimov5" },
                { id: 7, firstName: "Dima6", lastName: "Jakimov6" },
                { id: 8, firstName: "Dima7", lastName: "Jakimov7" },
                { id: 9, firstName: "Dima8", lastName: "Jakimov8" },
                { id: 10, firstName: "Dima9", lastName: "Jakimov9" },
                { id: 11, firstName: "Dima10", lastName: "Jakimov10" },
                { id: 12, firstName: "Dima11", lastName: "Jakimov11" },
                { id: 13, firstName: "Dima12", lastName: "Jakimov12" },
                { id: 14, firstName: "Dima13", lastName: "Jakimov13" },
                { id: 15, firstName: "Dima14", lastName: "Jakimov14" },
                { id: 16, firstName: "Roman", lastName: "Pichurin" },
                { id: 17, firstName: "Roman1", lastName: "Pichurin1" },
                { id: 18, firstName: "Roman2", lastName: "Pichurin2" }
            ]
        };
        this.eventService.subscribeToEvent(this, this.config.eventFromComponent, this.consoleOutput);
    }
    MainComponent.prototype.consoleOutput = function (value, object) {
        object.selectedItem = value;
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "main-component",
            templateUrl: "../templates/main.component.template.html",
            directives: [autocomplete_component_1.AutocompleteComponent]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map