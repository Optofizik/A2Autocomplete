import {Component} from "@angular/core";
import {AutocompleteComponent} from "./autocomplete.component";

@Component({
    selector: "find-name",
    templateUrl: "../templates/findname.component.template.html",
    directives: [AutocompleteComponent]
})
export class FindNameComponent {
    public name: string;
}
