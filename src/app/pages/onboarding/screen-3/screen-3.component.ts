import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-screen-3',
  templateUrl: './screen-3.component.html',
  styleUrl: './screen-3.component.css'
})
export class Screen3Component {
  constructor(private router: Router) {}

  async completeOnboarding() {
    await Storage.set({ key: 'onboardingCompleted', value: 'true' });
    this.router.navigate(['/auth/sign-in']);
  }
}
