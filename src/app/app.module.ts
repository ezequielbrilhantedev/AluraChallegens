import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuNavComponent } from './components/body/menu-nav/menu-nav.component';
import { TituloProjComponent } from './components/body/titulo-proj/titulo-proj.component';
import { BodyComponent } from './components/body/body.component';
import { EditorCodeComponent } from './components/body/editor-code/editor-code.component';
import { ComunidadeComponent } from './components/comunidade/comunidade.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuNavComponent,
    TituloProjComponent,
    BodyComponent,
    EditorCodeComponent,
    ComunidadeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
