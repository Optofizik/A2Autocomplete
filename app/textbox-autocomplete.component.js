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
var TextboxAutocompleteConfig = (function () {
    function TextboxAutocompleteConfig() {
    }
    return TextboxAutocompleteConfig;
}());
exports.TextboxAutocompleteConfig = TextboxAutocompleteConfig;
var TextboxAutocompleteComponent = (function () {
    function TextboxAutocompleteComponent(eventService) {
        this.eventService = eventService;
        this.isInit = false;
    }
    TextboxAutocompleteComponent.prototype.onKeyUp = function () {
        var _this = this;
        if (this.mask.length >= this.config.minLength) {
            this.isInit = true;
            var tempConfig_1 = this.config;
            this.filteredItems = tempConfig_1.source.filter(function (it, i, arr) {
                var searchItem = it[tempConfig_1.propertySearch].toString().toUpper();
                return searchItem.indexOf(_this.mask.toUpperCase()) != -1;
            });
        }
    };
    TextboxAutocompleteComponent.prototype.selectItem = function (value) {
        this.eventService.raiseEvent(this, this.config.eventFromComponent, value[this.config.propertyToSend]);
    };
    TextboxAutocompleteComponent = __decorate([
        core_1.Component({
            selector: "txt-autocomplete",
            templateUrl: "../templates/textbox-autocomplete.component.template.html"
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], TextboxAutocompleteComponent);
    return TextboxAutocompleteComponent;
}());
exports.TextboxAutocompleteComponent = TextboxAutocompleteComponent;
//# sourceMappingURL=textbox-autocomplete.component.js.map