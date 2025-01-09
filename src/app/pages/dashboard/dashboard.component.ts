import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  web3CircleTop: AnimationOptions = {
    path: '/assets/lottie/web3_splash_screen_circle_animation_top_right.json',
  };

  web3CircleBottom: AnimationOptions = {
    path: '/assets/lottie/web3_splash_screen_circle_animation_bottom_left.json',
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
