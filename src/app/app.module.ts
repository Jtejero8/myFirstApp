import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders } from './app.routing';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/componentes/header/header.componet';
import { BodyComponent } from '../app/componentes/body/body.component';
import { HomeComponent } from './componentes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
    routing
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
