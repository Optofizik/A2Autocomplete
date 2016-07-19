import {Component, OnInit} from "@angular/core"
import {EventService} from "./event.service";

export class AutocompleteConfig {

        public eventOnInput: string;
        public eventOnSelect: string;
        public propertyDisplay: string;
        public propertyChoose: string;
        public propertySearch: string;
        public source: any[];

}


@Component({
    selector: "autocomplete",
    templateUrl:"templates/autocomplete.component.template.html",
    inputs: ["config"]
})
export class AutocompleteComponent implements OnInit{

    public config: AutocompleteConfig;

    public filtered: any[];
    public isInit: boolean = false;

    constructor(private eventService: EventService) {  }

    onChangeInput(value: string, object: any): void {

        if(value == "") {
            object.turnOff();
        }
        else {
            object.isInit = true;
            let tempConfig = object.config;
            object.filtered = tempConfig.source.filter((it, i, arr) => {
                 let tempStr: string = it[tempConfig.propertySearch].toString().toUpperCase();
                 return tempStr.indexOf(value.toUpperCase()) != -1;
            });
        }
    }

    selectItem(item): void {
        this.eventService.raiseEvent(this, this.config.eventOnSelect, item);
        this.turnOff();
    }

    ngOnInit():any {
        this.eventService.subscriveToEvent(this, this.config.eventOnInput, this.onChangeInput);
    }

    turnOff() {
        this.isInit = false;
        this.filtered = null;
    }

}


