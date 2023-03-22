import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { SobreMiComponent } from './Componentes/sobre-mi/sobre-mi.component';
import { SkillComponent } from './Componentes/skill/skill.component';
import { CurriculumComponent } from './Componentes/curriculum/curriculum.component';
import { PortfolioComponent } from './Componentes/portfolio/portfolio.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    SobreMiComponent,
    SkillComponent,
    CurriculumComponent,
    PortfolioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
