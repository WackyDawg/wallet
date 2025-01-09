import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.css',
})
export class VerifyCodeComponent {
  constructor(private router: Router) {}

  verificationCode: string = '';
  onCodeChange(): void {
    if (this.verificationCode.length === 6) {
      this.navigateNext();
    }
  }

  // Navigate to the next step
  navigateNext(): void {
    if (this.verificationCode.length === 6) {
      this.router.navigate(['/onboarding/step-5']);
    }
  }

  navigateBack(): void {
    this.router.navigate(['/onboarding/step-3']);
  }
}
