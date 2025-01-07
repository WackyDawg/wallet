import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-6',
  templateUrl: './screen-6.component.html',
  styleUrl: './screen-6.component.css'
})
export class Screen6Component {
  constructor(private router: Router){}

  navigateBack(): void {
    this.router.navigate(['/onboarding/step-5']);
  }
}
