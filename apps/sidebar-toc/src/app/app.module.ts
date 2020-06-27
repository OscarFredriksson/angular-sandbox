import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../../libs/shared/material.module';

@NgModule({
  declarations: [AppComponent, StartPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: "", component: StartPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
