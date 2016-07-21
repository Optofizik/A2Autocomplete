import {Component} from "@angular/core";
import {EventService} from "./event.service";
import {TextboxAutocompleteComponent} from "./textbox-autocomplete.component";
import {TextboxAutocompleteConfig} from "./configs";

@Component({
    selector: "main-component",
    templateUrl: "../templates/main.component.template.html",
    directives: [TextboxAutocompleteComponent]
})
export class MainComponent {

    public config:TextboxAutocompleteConfig = {
        minLength: 3,
        elementId: "hero-name",
        propertyDisplay: ["{0} {1} {2}", 'lastName', 'firstName', 'id'],
        propertySearch: "firstName",
        propertyInputDisplay: ["{0} {1} {2}", 'lastName', 'firstName', 'id'],
        eventFromComponent: "select-hero-id",
        source: [
            {id: 1, firstName: "Dima", lastName: "Jakimov"},
            {id: 2, firstName: "Dima1", lastName: "Jakimov1"},
            {id: 3, firstName: "Dima2", lastName: "Jakimov2"},
            {id: 4, firstName: "Roman", lastName: "Pichurin"},
            {id: 5, firstName: "Roman1", lastName: "Pichurin1"},
            {id: 6, firstName: "Roman2", lastName: "Pichurin2"}
        ]
    };
}
