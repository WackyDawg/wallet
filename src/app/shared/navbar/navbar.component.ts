import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}

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

      this.navbarHeight = this.navbarHeight + diff;

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
}
