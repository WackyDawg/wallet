import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-4',
  templateUrl: './screen-4.component.html',
  styleUrl: './screen-4.component.css'
})
export class Screen4Component {

  constructor(private router: Router) { }

  navigateNext() {
    this.router.navigate(['/onboarding/step-5']);
  }
}
