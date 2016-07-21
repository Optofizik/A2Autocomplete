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
var AutocompleteComponent = (function () {
    function AutocompleteComponent(eventService) {
        this.eventService = eventService;
        this.isInit = false;
    }
    AutocompleteComponent.prototype.onChangeInput = function (value, object) {
        var tempConfig = object.config;
        object.filtered = tempConfig.source.filter(function (it, i, arr) {
            var tempStr = it[tempConfig.propertySearch].toString().toUpperCase();
            return tempStr.indexOf(value.toString().toUpperCase()) != -1;
        });
        object.isInit = object.filtered.length > 0;
    };
    AutocompleteComponent.prototype.selectItem = function (value) {
        this.eventService.raiseEvent(this, this.config.eventFromComponent, value);
        this.turnOff();
    };
    AutocompleteComponent.prototype.ngOnInit = function () {
        this.eventService.subscriveToEvent(this, "autocompleteInput" + this.config.elementId.toString(), this.onChangeInput);
    };
    AutocompleteComponent.prototype.formatPropertyDisplay = function (item) {
        var tempArray = this.config.propertyDisplay;
        var template = tempArray[0];
        for (var i = 1; i < tempArray.length; i++) {
            template = template.replace("{" + (i - 1) + "}", item[tempArray[i]]);
        }
        return template;
    };
    AutocompleteComponent.prototype.onKeyUp = function () {
        if (this.mask.length >= this.config.minLength) {
            this.eventService.raiseEvent(this, "autocompleteInput" + this.config.elementId.toString(), this.mask);
        }
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