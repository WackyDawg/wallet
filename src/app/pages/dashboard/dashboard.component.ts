import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router) {}

  web3CircleTop: AnimationOptions = {
    path: '/assets/lottie/web3_splash_screen_circle_animation_top_right.json',
  };

  web3CircleBottom: AnimationOptions = {
    path: '/assets/lottie/web3_splash_screen_circle_animation_bottom_left.json',
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  isFooterAtTop = false;

  toggleFooterPosition() {
    this.isFooterAtTop = !this.isFooterAtTop;
  }
    
  //Campaigns Dummy Data 
  campaigns = [
    {
      title: 'MiniPay Boost🌱',
      description: 'Earn 2% weekly rewards on your balance paid daily.',
      image: '/assets/images/icons/campaigns/logo-1.png',
      action: ''
    },
    {
      title: 'Invite Friends, Earn Cash',
      description: 'Like MiniPay? Earn $0.20 when you share it with your friends.',
      image: '/assets/images/icons/campaigns/logo-2.png',
      action: ''
    },
    {
      title: 'New Mini App: Multis',
      description: 'Turn your prediction into points when you play Multis in MiniPay',
      image: '/assets/images/icons/campaigns/logo-3.png',
      action: ''
    },
    {
      title: 'Pay with O-pay',
      description: 'Hold dollars and send directly to O-pay and Moniepoint accounts.',
      image: '/assets/images/icons/campaigns/logo-4.png',
      action: ''
    },
    {
      title: 'Pay Bills, Get Cashback',
      description: 'Pay for GOtv,DStv,buy airtime and get 10% cashback.',
      image: '/assets/images/icons/campaigns/logo-5.png',
      action: ''
    },
    {
      title: 'Daily login bonus',
      description: 'Keep your streak alive,claim rewards with MiniPay claim.',
      image: '/assets/images/icons/campaigns/logo-6.png',
      action: ''
    },
    {
      title: 'Follow MiniPay on X',
      description: 'Follow the official MiniPay account on X for updates,MiniPay cash links and more.',
      image: '/assets/images/icons/campaigns/logo-7.png',
      action: ''
    }
  ]
    
}
