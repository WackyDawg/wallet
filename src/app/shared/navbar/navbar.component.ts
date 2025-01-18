import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}
  displayValue: string = '0';
  maxLimit: number = 999999;
  keys: (string | 'backspace')[] = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '0', 'backspace'
  ];

  onKeyPress(key: string | 'backspace'): void {
    if (key === 'backspace') {
      this.displayValue = this.displayValue.length > 1
        ? this.displayValue.slice(0, -1)
        : '0';
    } else if (key === '.') {
      if (!this.displayValue.includes('.')) {
        this.displayValue += key;
      }
    } else {
      const newValue = this.displayValue === '0' ? key : this.displayValue + key;

      if (parseFloat(newValue) <= this.maxLimit) {
        this.displayValue = newValue;
      }
    }
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  navbarHeight: number = 80;
  isDragging: boolean = false;
  startY: number = 0;

  onTouchStart(event: TouchEvent): void {
    this.isDragging = true;
    this.startY = event.touches[0].clientY;
  }

  onTouchMove(event: TouchEvent): void {
    if (this.isDragging) {
      const currentY = event.touches[0].clientY;
      const diff = this.startY - currentY;

      const newHeight = this.navbarHeight + diff;

      if (this.navbarHeight >= window.innerHeight + 100 && diff > 0) {
        return;
      }

      this.navbarHeight = newHeight;

      if (this.navbarHeight < 80) {
        this.navbarHeight = 80;
      }

      this.startY = currentY;
    }
  }

  onTouchEnd(): void {
    this.isDragging = false;

    if (this.navbarHeight >= window.innerHeight * 0.8) {
      this.navbarHeight = window.innerHeight + 100;
    } else {
      this.navbarHeight = 80;
    }
  }

  expandNavbar(): void {
    this.navbarHeight = window.innerHeight + 100;
  }

  miniAppsNav(): void {
    this.router.navigate(['/mini-apps']);
  }

  walletNav(): void {
    this.router.navigate(['/dashboard']);
  }

  selectedCurrency: 'USD' | 'NGN' = 'USD';

  setCurrency(currency: 'USD' | 'NGN') {
    this.selectedCurrency = currency;
  }
}
