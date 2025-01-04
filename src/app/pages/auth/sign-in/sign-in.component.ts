import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
    
//lottie Animations 
signInOption: AnimationOptions = { 
  path: '../../../../assets/lottie/onboarding_part_2.json'
};

signInOption2: AnimationOptions = {
  path: '../../../../assets/lottie/onboarding_part_2_text.json'
};

signInOption3: AnimationOptions = {
  path: '../../../../assets/lottie/onboarding_part_1.json'
};

onAnimate(animationItem: AnimationItem): void {    
  console.log(animationItem);  
}
}
