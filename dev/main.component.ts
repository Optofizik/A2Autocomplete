import {Component} from "@angular/core";
import {EventService} from "./event.service";
import {TextboxAutocompleteComponent, TextboxAutocompleteConfig} from "./textbox-autocomplete.component";

@Component({
    selector: "main-component",
    templateUrl: "../templates/main.component.template.html",
    directives: [TextboxAutocompleteComponent]
})
export class MainComponent {
    public config: TextboxAutocompleteConfig;
}
