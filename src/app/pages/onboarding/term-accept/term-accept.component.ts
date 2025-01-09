import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-term-accept',
  templateUrl: './term-accept.component.html',
  styleUrl: './term-accept.component.css'
})
export class TermAcceptComponent implements OnInit {
  showAnimation: boolean = true;
  constructor(private router: Router) { }

  navigateNext() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
    setTimeout(() => {
      this.showAnimation = false;
    }, 10000);
  }
  greenConfetti: AnimationOptions = {
    path: '/assets/lottie/confetti.json',
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
