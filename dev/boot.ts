import {bootstrap}    from "@angular/platform-browser-dynamic";
import {Type} from "@angular/core"
import {AppComponent} from './app.component'
import {EventService} from "./event.service"

bootstrap(<Type>AppComponent,[EventService]);