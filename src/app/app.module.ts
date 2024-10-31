import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { HomeComponent } from './components/home/home.component';
import { MayusculasPipe } from './pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    HomeComponent,
    MayusculasPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
