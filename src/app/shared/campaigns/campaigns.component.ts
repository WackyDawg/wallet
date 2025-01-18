import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent implements OnInit {
  @Input() campaigns!: any[];
  @ViewChild('slider') sliderRef!: ElementRef;

  private touchStartX: number = 0;
  private slideWidth: number = 0;
  private currentSlide: number = 0;

  ngAfterViewInit() {
    this.slideWidth = this.sliderRef.nativeElement.offsetWidth;
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent): void {
    event.preventDefault();
  }

  onTouchEnd(event: TouchEvent): void {
    const slider = this.sliderRef.nativeElement;
    const touchEndX = event.changedTouches[0].clientX;
    const difference = this.touchStartX - touchEndX;
    
    if (Math.abs(difference) > 50) { 
      if (difference > 0 && this.currentSlide < this.campaigns.length - 1) {
        this.currentSlide++;
      } else if (difference < 0 && this.currentSlide > 0) {
        this.currentSlide--;
      }
      
      slider.scrollTo({
        left: this.currentSlide * this.slideWidth,
        behavior: 'smooth'
      });
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.slideWidth = this.sliderRef.nativeElement.offsetWidth;
    this.sliderRef.nativeElement.scrollTo({
      left: this.currentSlide * this.slideWidth,
      behavior: 'smooth'
    });
  }

  
  ngOnInit(): void {
    
  }
}
