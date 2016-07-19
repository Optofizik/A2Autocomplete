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
var AutocompleteConfig = (function () {
    function AutocompleteConfig() {
    }
    return AutocompleteConfig;
}());
exports.AutocompleteConfig = AutocompleteConfig;
var AutocompleteComponent = (function () {
    function AutocompleteComponent(eventService) {
        this.eventService = eventService;
        this.isInit = false;
    }
    AutocompleteComponent.prototype.onChangeInput = function (value, object) {
        if (value == "") {
            object.turnOff();
        }
        else {
            object.isInit = true;
            var tempConfig_1 = object.config;
            object.filtered = tempConfig_1.source.filter(function (it, i, arr) {
                var tempStr = it[tempConfig_1.propertySearch].toString().toUpperCase();
                return tempStr.indexOf(value.toUpperCase()) != -1;
            });
        }
    };
    AutocompleteComponent.prototype.selectItem = function (item) {
        this.eventService.raiseEvent(this, this.config.eventOnSelect, item);
        this.turnOff();
    };
    AutocompleteComponent.prototype.ngOnInit = function () {
        this.eventService.subscriveToEvent(this, this.config.eventOnInput, this.onChangeInput);
    };
    AutocompleteComponent.prototype.turnOff = function () {
        this.isInit = false;
        this.filtered = null;
    };
    AutocompleteComponent = __decorate([
        core_1.Component({
            selector: "autocomplete",
            templateUrl: "templates/autocomplete.component.template.html",
            inputs: ["config"]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());
exports.AutocompleteComponent = AutocompleteComponent;
//# sourceMappingURL=autocomplete.component.js.map