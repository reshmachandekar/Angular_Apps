import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { TooltipModule } from 'ngx-bootstrap/tooltip';



import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    ThreeComponent,
    FourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TooltipModule.forRoot(),
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
