import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTokenizerComponent } from './card-tokenizer/card-tokenizer.component';
import { HeaderComponent } from './header/header.component';
import { PrettyPrintPipe } from './pretty-print.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardTokenizerComponent,
    HeaderComponent,
    PrettyPrintPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
