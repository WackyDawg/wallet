import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class onboardingGuard implements CanActivate {
  constructor(private router: Router) {} 

  async canActivate(): Promise<boolean> {
    const { value } = await Storage.get({ key: 'onboardingCompleted' });

    if (value === 'true') {
      this.router.navigate(['/auth/sign-in']);
      return false;
    }

    return true;
  }
}
