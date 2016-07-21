import {Component, OnInit} from "@angular/core"
import {EventService} from "./event.service";
import {TextboxAutocompleteConfig} from "./configs";
import {AutocompleteComponent} from "./autocomplete.component";


@Component({
    selector: "txt-autocomplete",
    templateUrl: "../templates/textbox-autocomplete.component.template.html",
    inputs: ["config"],
    directives: [AutocompleteComponent]
})
export class TextboxAutocompleteComponent implements OnInit{

    public mask:string;
    public config: TextboxAutocompleteConfig;

    constructor(public eventService:EventService) {}

    onKeyUp():void {
        if (this.mask.length >= this.config.minLength) {
           this.eventService.raiseEvent(this, "autocompleteInput" + this.config.elementId.toString(), this.mask );
        }
    }

    updateInputValue(value: any, object: any): void {
        object.mask = value[object.config.propertyInputDisplay];
    }

    ngOnInit():any {
        this.eventService.subscriveToEvent(this,this.config.eventFromComponent, this.updateInputValue);
    }


}

