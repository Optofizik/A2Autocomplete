import {Component} from "@angular/core";
import {AutocompleteComponent} from "./autocomplete.component";
import {EventService} from "./event.service";

@Component({
    selector: "find-name",
    templateUrl: "../templates/findname.component.template.html",
    directives: [AutocompleteComponent]
})
export class FindNameComponent {

    public autocompleteInput: string = "autocompleteInput";
    public autocompleteSelect: string = "autocompleteSelect";
    public persons: any[] = [
        {id: 1, name: "Dima" },
        {id: 2, name: "Julia" },
        {id: 3, name: "Dimas" },
        {id: 4, name: "Juliet"}
    ];

    constructor(private eventService: EventService) {
        this.eventService.subscriveToEvent(this,this.autocompleteSelect,this.onAutocompleteSelect )
    }

    public name: string;

    onKeyUp(): void {
        this.eventService.raiseEvent(this, this.autocompleteInput, this.name);
    }

    onAutocompleteSelect(value: string, object: any) : void {
        object.name = value;
    }

}
