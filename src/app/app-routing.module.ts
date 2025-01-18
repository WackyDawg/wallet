import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { onboardingGuard } from './guards/onboarding.guard';
import { OfflineComponent } from './pages/network-status/offline/offline.component';
import { SecureWalletComponent } from './pages/onboarding/secure-wallet/secure-wallet.component';
import { ConnectPhoneComponent } from './pages/onboarding/connect-phone/connect-phone.component';
import { VerifyPhoneComponent } from './pages/onboarding/verify-phone/verify-phone.component';
import { VerifyCodeComponent } from './pages/onboarding/verify-code/verify-code.component';
import { TermAcceptComponent } from './pages/onboarding/term-accept/term-accept.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MiniAppsComponent } from './pages/mini-apps/mini-apps.component';
import { BrowserComponent } from './shared/browser/browser.component';
import { MyQrComponent } from './pages/my-qr/my-qr.component';


const routes: Routes = [
  //Default Route
  { path: '', component: SignInComponent, canActivate: [onboardingGuard]},
  //onboarding routes
  { path: 'onboarding/step-1', component: SecureWalletComponent },
  { path: 'onboarding/step-2', component: ConnectPhoneComponent },
  { path: 'onboarding/step-3', component: VerifyPhoneComponent},
  { path: 'onboarding/step-4', component: VerifyCodeComponent },
  { path: 'onboarding/step-5', component: TermAcceptComponent },

  //Auth Routes
  { path: 'auth/sign-in', component: SignInComponent },

  //Dashboard Routes
  { path: 'dashboard', component: DashboardComponent},
  { path: 'mini-apps', component: MiniAppsComponent},

  //Network Status Routes
  { path: 'network-status/offline', component: OfflineComponent },

  //Other Routes
  { path: 'browser', component: BrowserComponent},
  { path: 'my-qrcode', component: MyQrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
