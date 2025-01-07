import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-5',
  templateUrl: './screen-5.component.html',
  styleUrl: './screen-5.component.css',
})
export class Screen5Component {
  dropdownOpen = false;
  selectedFlag = '/assets/svg/flags/us.svg';
  selectedText = '+1';
  countries: any[];

  constructor(private router: Router, @Inject('COUNTRIES_CONFIG') private countriesConfig: any[]) {
    this.countries = countriesConfig;
    //console.log(this.countries);
  }

  navigateBack(): void {
    this.router.navigate(['/onboarding/step-4']);
  }

  navigateNext(): void {
    this.router.navigate(['/onboarding/step-6']);
  }
  
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectItem(country: { flagsvg: string; name: string; code: string }) {
    this.selectedFlag = country.flagsvg;
    this.selectedText = country.code;
    this.dropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.dropdownOpen = false;
    }
  }
}
