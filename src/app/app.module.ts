import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuIzComponent } from './menu-iz/menu-iz.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AreaDeContenidoComponent } from './area-de-contenido/area-de-contenido.component';
import { DiretivasComponent } from './diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuIzComponent,
    ToolbarComponent,
    AreaDeContenidoComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
