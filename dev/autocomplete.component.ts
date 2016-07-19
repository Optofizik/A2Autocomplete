import {Component, OnInit} from "@angular/core"
import {EventService} from "./event.service";

@Component({
    selector: "autocomplete",
    templateUrl:"templates/autocomplete.component.template.html",
    inputs: ["source", "eventOnInput", "eventOnSelect", "propertyDisplay", "propertyChoose", "propertySearch"]
})
export class AutocompleteComponent implements OnInit{

    public eventOnInput: string;
    public eventOnSelect: string;

    public propertyDisplay: string;
    public propertyChoose: string;
    public propertySearch: string;

    public source: any[];
    public filtered: any[];
    public isInit: boolean = false;

    constructor(private eventService: EventService) {  }

    onChangeInput(value: string, object: any): void {

        if(value == "") {
            object.isInit = false;
            object.filtered = null;
        }
        else {

            object.isInit = true;
            object.filtered = object.source.filter((it, i, arr) => {
                 let tempStr: string = it[object.propertySearch].toString().toUpperCase();
                 return tempStr.indexOf(value.toUpperCase()) != -1;
            });
        }
    }

    selectItem(item): void {

        this.eventService.raiseEvent(this, this.eventOnSelect, item);

        this.isInit = false;
        this.filtered = null;
    }

    ngOnInit():any {
        this.eventService.subscriveToEvent(this, this.eventOnInput, this.onChangeInput);
    }

}
