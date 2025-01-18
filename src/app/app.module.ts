import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { COUNTRIES } from './configs/countries.config';
import { OfflineComponent } from './pages/network-status/offline/offline.component';
import { SecureWalletComponent } from './pages/onboarding/secure-wallet/secure-wallet.component';
import { ConnectPhoneComponent } from './pages/onboarding/connect-phone/connect-phone.component';
import { VerifyPhoneComponent } from './pages/onboarding/verify-phone/verify-phone.component';
import { WelcomeComponent } from './pages/onboarding/welcome/welcome.component';
import { VerifyCodeComponent } from './pages/onboarding/verify-code/verify-code.component';
import { TermAcceptComponent } from './pages/onboarding/term-accept/term-accept.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DraggableDirective } from './directives/draggable.directive';
import { MiniAppsComponent } from './pages/mini-apps/mini-apps.component';
import { MyQrComponent } from './pages/my-qr/my-qr.component';
import { CampaignsComponent } from './shared/campaigns/campaigns.component';
import { BrowserComponent } from './shared/browser/browser.component';
import { TransactionHistoryComponent } from './shared/transaction-history/transaction-history.component';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    OfflineComponent,
    SecureWalletComponent,
    ConnectPhoneComponent,
    VerifyPhoneComponent,
    WelcomeComponent,
    VerifyCodeComponent,
    TermAcceptComponent,
    DashboardComponent,
    NavbarComponent,
    DraggableDirective,
    MiniAppsComponent,
    MyQrComponent,
    CampaignsComponent,
    BrowserComponent,
    TransactionHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieComponent,
    FormsModule
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
