import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbcSquareComponent } from './abc-square/abc-square.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcSquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
