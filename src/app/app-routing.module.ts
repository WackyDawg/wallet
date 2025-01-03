import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen1Component } from './pages/onboarding/screen-1/screen-1.component';
import { Screen2Component } from './pages/onboarding/screen-2/screen-2.component';
import { Screen3Component } from './pages/onboarding/screen-3/screen-3.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';

const routes: Routes = [
  //onboarding routes
  { path: 'onboarding/step-1', component: Screen1Component },
  { path: 'onboarding/step-2', component: Screen2Component },
  { path: 'onboarding/step-3', component: Screen3Component},

  //Auth Routes
  { path: 'auth/sign-in', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
