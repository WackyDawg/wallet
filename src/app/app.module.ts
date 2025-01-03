import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Screen1Component } from './pages/onboarding/screen-1/screen-1.component';
import { Screen2Component } from './pages/onboarding/screen-2/screen-2.component';
import { Screen3Component } from './pages/onboarding/screen-3/screen-3.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
