import {Component} from "@angular/core"

@Component({
    selector: "autocomplete",
    templateUrl:"templates/autocomplete.component.template.html"
})
export class AutocompleteComponent {
    public items: any[] = ["a", "b", "c", "d"];
    public isInit: boolean = false;
}
