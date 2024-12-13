import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BlankLayoutModule } from './main/layouts/blank-layout/blank-layout.module';
import { LocalStorageService, SessionStorageService } from 'src/core/shared/common/services/storage';
import { ApiModule } from 'src/core/shared/common/services/api/api.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, BlankLayoutModule, ApiModule],
  providers: [LocalStorageService, SessionStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
