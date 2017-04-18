import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule, MdIconModule, MdToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
