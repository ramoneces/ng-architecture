import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';

import { Page1Component } from './pages/page1/page1.component';
import { ExtensibleListComponent } from './components/extensible-list/extensible-list.component';
import { ExtensibleContentComponent } from './components/extensible-content/extensible-content.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    ExtensibleListComponent,
    ExtensibleContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
