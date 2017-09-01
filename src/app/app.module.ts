import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeroiComponent } from './heroi/heroi.component';
import { ListaheroisComponent } from './listaherois/listaherois.component';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeroiComponent,
        ListaheroisComponent,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
