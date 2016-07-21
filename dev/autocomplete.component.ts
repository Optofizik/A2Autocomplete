import {Component, OnInit} from "@angular/core"
import {EventService} from "./event.service";
import {AutocompleteConfig} from "./configs";


@Component({
    selector: "autocomplete",
    templateUrl: "templates/autocomplete.component.template.html",
    inputs: ["config"]
})
export class AutocompleteComponent implements OnInit {

    public config:AutocompleteConfig;

    public filtered:any[];
    public isInit:boolean = false;

    constructor(private eventService:EventService) {
    }

    onChangeInput(value:any, object:any):void {

        let tempConfig = object.config;
        object.filtered = tempConfig.source.filter((it, i, arr) => {
            let tempStr:string = it[tempConfig.propertySearch].toString().toUpperCase();
            return tempStr.indexOf(value.toString().toUpperCase()) != -1;
        });

        object.isInit = object.filtered.length > 0;
    }

    selectItem(value:any):void {
        this.eventService.raiseEvent(this, this.config.eventFromComponent, value);
        this.turnOff();
    }

    ngOnInit():any {
        this.eventService.subscriveToEvent(this, "autocompleteInput" + this.config.elementId.toString(), this.onChangeInput);
    }

    formatPropertyDisplay(item): string {

        let tempArray = this.config.propertyDisplay;
        let template:string = tempArray[0];

        for (let i:number = 1; i < tempArray.length; i++) {
            template = template.replace("{" + (i-1) + "}", item[tempArray[i]]);
        }

       return template;
    }

    onKeyUp():void {
        if (this.mask.length >= this.config.minLength) {
            this.eventService.raiseEvent(this, "autocompleteInput" + this.config.elementId.toString(), this.mask );
        }
    }

    turnOff() {
        this.isInit = false;
        this.filtered = null;
    }

}


