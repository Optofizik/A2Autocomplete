import {Component} from '@angular/core'
import {FindNameComponent} from "./findname.component";

@Component({
    selector: 'my-app',
    template: `
                <find-name></find-name>
              `,
    directives: [FindNameComponent]
})
export class AppComponent { }
