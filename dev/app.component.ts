import {Component} from '@angular/core'
import {MainComponent} from "./main.component.ts";

@Component({
    selector: 'my-app',
    template: `
                <main-component></main-component>
              `,
    directives: [MainComponent]
})
export class AppComponent { }
