import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  isLoading = false;

  constructor(private router: Router) { }


  //lottie Animations
  signInOption: AnimationOptions = {
    path: '../../../../assets/lottie/onboarding_part_2.json',
  };

  signInOption2: AnimationOptions = {
    path: '../../../../assets/lottie/onboarding_part_2_text.json',
  };

  signInOption3: AnimationOptions = {
    path: '../../../../assets/lottie/onboarding_part_1.json',
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  // Simulate navigation to the next page; placeholder implementation. 
  // Future enhancement: integrate Google OAuth Plugin for authentication and navigation.
  navigateNext(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/onboarding/step-1']);
    }, 2000);
  }
}
