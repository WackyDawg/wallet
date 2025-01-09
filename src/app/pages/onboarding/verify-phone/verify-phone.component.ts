import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.component.html',
  styleUrl: './verify-phone.component.css',
})
export class VerifyPhoneComponent {
  constructor(private router: Router) {}

  navigateBack(): void {
    this.router.navigate(['/onboarding/step-2']);
  }

  navigateNext(): void {
    this.router.navigate(['/onboarding/step-4']);
  }
}
