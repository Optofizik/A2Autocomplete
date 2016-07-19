import {Component} from "@angular/core"
import {EventService} from "./event.service";

export class TextboxAutocompleteConfig {

    public minLength: number;

    public eventFromComponent: string;

    public propertyDisplay: string;
    public propertyChoose: string;
    public propertySearch: string;
    public propertyToSend: string;

    public source: any[];
}


@Component({
    selector: "txt-autocomplete",
    templateUrl: "../templates/textbox-autocomplete.component.template.html"
})
export class TextboxAutocompleteComponent {

    constructor(public eventService: EventService) {}

    public isInit: boolean = false;
    public mask: string;
    public filteredItems: any[];
    public config: TextboxAutocompleteConfig;

    onKeyUp(): void {
        if(this.mask.length >= this.config.minLength)
        {
            this.isInit = true;
            let tempConfig = this.config;
            this.filteredItems = tempConfig.source.filter((it, i, arr) => {
                let searchItem = it[tempConfig.propertySearch].toString().toUpper();
                return searchItem.indexOf(this.mask.toUpperCase()) != -1;
            });
        }
    }

    selectItem(value: any): void {
        this.eventService.raiseEvent(this,this.config.eventFromComponent, value[this.config.propertyToSend]);
    }
}

