import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-screen-1',
  templateUrl: './screen-1.component.html',
  styleUrl: './screen-1.component.css'
})
export class Screen1Component implements OnInit {
  constructor(private router: Router) { }
   ngOnInit(): void {
   }

   navigateNext(): void {
      this.router.navigate(['/onboarding/step-2']);
   }
}
