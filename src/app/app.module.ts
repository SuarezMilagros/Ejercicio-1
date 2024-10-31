import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { HomeComponent } from './components/home/home.component';
import { MayusculasPipe } from './pipes.pipe';
import { DespedidaComponent } from './components/despedida/despedida.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    HomeComponent,
    MayusculasPipe,
    DespedidaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
