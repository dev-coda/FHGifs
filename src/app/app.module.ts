import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GifModule } from './gifs/gifcomponent.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, GifModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
