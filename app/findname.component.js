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
var event_service_1 = require("./event.service");
var FindNameComponent = (function () {
    function FindNameComponent(eventService) {
        this.eventService = eventService;
        this.autocompleteInput = "autocompleteInput";
        this.autocompleteSelect = "autocompleteSelect";
        this.persons = [
            { id: 1, name: "Dima" },
            { id: 2, name: "Julia" },
            { id: 3, name: "Dimas" },
            { id: 4, name: "Juliet" }
        ];
        this.eventService.subscriveToEvent(this, this.autocompleteSelect, this.onAutocompleteSelect);
    }
    FindNameComponent.prototype.onKeyUp = function () {
        this.eventService.raiseEvent(this, this.autocompleteInput, this.name);
    };
    FindNameComponent.prototype.onAutocompleteSelect = function (value, object) {
        object.name = value;
    };
    FindNameComponent = __decorate([
        core_1.Component({
            selector: "find-name",
            templateUrl: "../templates/findname.component.template.html",
            directives: [autocomplete_component_1.AutocompleteComponent]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], FindNameComponent);
    return FindNameComponent;
}());
exports.FindNameComponent = FindNameComponent;
//# sourceMappingURL=findname.component.js.map