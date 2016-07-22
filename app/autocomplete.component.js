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
    AutocompleteComponent.prototype.onKeyUp = function () {
        var _this = this;
        if (this.mask.length >= this.config.minLength) {
            var tempConfig_1 = this.config;
            this.filtered = tempConfig_1.source.filter(function (it, i, arr) {
                var tempStr;
                for (var i_1 = 0; i_1 < tempConfig_1.propertySearch.length; i_1++) {
                    tempStr = it[tempConfig_1.propertySearch[i_1]].toString().toUpperCase();
                    if (tempStr.indexOf(_this.mask.toString().toUpperCase()) != -1)
                        return true;
                }
                return false;
            }).sort(function (a, b) {
                if (a[tempConfig_1.propertyToSort] > b[tempConfig_1.propertyToSort]) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
            this.filtered = this.filtered.slice(0, 10);
            this.isInit = this.filtered.length > 0;
        }
        else {
            this.turnOff();
        }
    };
    AutocompleteComponent.prototype.selectItem = function (item) {
        this.mask = this.formatPropertyDisplay(item, 'propertyInputDisplay');
        this.eventService.raiseEvent(this, this.config.eventFromComponent, item);
        this.turnOff();
    };
    AutocompleteComponent.prototype.formatPropertyDisplay = function (item, propertyName) {
        var tempArray = this.config[propertyName];
        var template = tempArray[0];
        for (var i = 1; i < tempArray.length; i++) {
            template = template.replace("{" + (i - 1) + "}", item[tempArray[i]]);
        }
        return template;
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