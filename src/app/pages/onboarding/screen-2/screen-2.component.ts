import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-2',
  templateUrl: './screen-2.component.html',
  styleUrl: './screen-2.component.css'
})
export class Screen2Component {
  constructor(private router: Router) {}

  navigateNext(): void {
    this.router.navigate(['/onboarding/step-3']);
 }
}
