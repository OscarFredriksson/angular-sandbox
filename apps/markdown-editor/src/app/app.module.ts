import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { MaterialModule} from '../../../../libs/shared/material.module';

import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import {MarkdownModule} from 'ngx-markdown';  

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from './components/editor/editor.component';


@NgModule({
  declarations: [AppComponent, EditorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    LMarkdownEditorModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
