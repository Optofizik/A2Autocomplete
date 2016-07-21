import {Component} from "@angular/core"
import {EventService} from "./event.service";

export class AutocompleteConfig {

    public minLength: number;

    public elementId: string;

    public propertyDisplay: Array<string>;
    public propertySearch: Array<string>;
    public propertyInputDisplay: Array<string>;

    public eventFromComponent: string;

    public source: any[];
}

@Component({
    selector: "autocomplete",
    templateUrl: "templates/autocomplete.component.template.html",
    inputs: ["config"]
})
export class AutocompleteComponent {

    constructor(private eventService: EventService) {}

    public config: AutocompleteConfig;

    public filtered:any[];
    public isInit:boolean = false;
    public mask:string;


    onKeyUp():void {
        if (this.mask.length >= this.config.minLength) {

            let tempConfig = this.config;
            this.filtered = tempConfig.source.filter((it, i, arr) => {
                
                let tempStr:string;

                for(let i: number = 0; i < tempConfig.propertySearch.length; i++)
                {
                    tempStr = it[tempConfig.propertySearch[i]].toString().toUpperCase()
                    if(tempStr.indexOf(this.mask.toString().toUpperCase()) != -1)
                        return true;
                }

                return false;
                  
            });

            this.isInit = this.filtered.length > 0;

        }
        else {
            this.turnOff();
        }
    }

    selectItem(item): void {
        this.mask = this.formatPropertyDisplay(item, 'propertyInputDisplay')
        this.eventService.raiseEvent(this, this.config.eventFromComponent, item);
        this.turnOff();
    }

    formatPropertyDisplay(item, propertyName): string {

        let tempArray = this.config[propertyName];
        let template:string = tempArray[0];

        for (let i:number = 1; i < tempArray.length; i++) {
            template = template.replace("{" + (i-1) + "}", item[tempArray[i]]);
        }

        return template;
    }

    turnOff() {
        this.isInit = false;
        this.filtered = null;
    }

}
