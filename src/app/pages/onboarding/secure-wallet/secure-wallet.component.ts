import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-wallet',
  templateUrl: './secure-wallet.component.html',
  styleUrl: './secure-wallet.component.css'
})
export class SecureWalletComponent {
constructor(private router: Router) { }

  navigateNext() {
    this.router.navigate(['/onboarding/step-2']);
  }
}
