import {Component} from "@angular/core"
import {EventService} from "./event.service";

export class AutocompleteConfig {

    public minLength: number;

    public elementId: string;

    public propertyDisplay: Array<string>;
    public propertySearch: string;
    public propertyInputDisplay: Array<string>;

    public eventFromComponent: string;

    public source: any[];
}


@Component({
    selector: "autocomplete",
    templateUrl: ["templates/autocomplete.component.template.html"],
    inputs: ["config"]
})
export class AutocompleteComponent {

    public config: AutocompleteConfig;

    public filtered:any[];
    public isInit:boolean = false;
    public mask:string;

    onKeyUp():void {
        if (this.mask.length >= this.config.minLength) {

            let tempConfig = this.config;
            this.filtered = tempConfig.source.filter((it, i, arr) => {
                let tempStr:string = it[tempConfig.propertySearch].toString().toUpperCase();
                return tempStr.indexOf(this.mask.toString().toUpperCase()) != -1;
            });

            this.isInit = this.filtered.length > 0;
        }
    }

}
