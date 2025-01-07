import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Screen1Component } from './pages/onboarding/screen-1/screen-1.component';
import { Screen2Component } from './pages/onboarding/screen-2/screen-2.component';
import { Screen3Component } from './pages/onboarding/screen-3/screen-3.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { Screen4Component } from './pages/onboarding/screen-4/screen-4.component';
import { Screen5Component } from './pages/onboarding/screen-5/screen-5.component';
import { COUNTRIES } from './configs/countries.config';
import { Screen6Component } from './pages/onboarding/screen-6/screen-6.component'; 

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    SignInComponent,
    Screen4Component,
    Screen5Component,
    Screen6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieComponent
  ],
  providers: [
    provideLottieOptions({
      player: playerFactory,
    }),
    {provide: 'COUNTRIES_CONFIG', useValue: COUNTRIES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
