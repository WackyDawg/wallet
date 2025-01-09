import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect-phone',
  templateUrl: './connect-phone.component.html',
  styleUrl: './connect-phone.component.css'
})
export class ConnectPhoneComponent {
dropdownOpen = false;
  selectedFlag = '/assets/svg/flags/us.svg';
  selectedText = '+1';
  countries: any[];

  constructor(private router: Router, @Inject('COUNTRIES_CONFIG') private countriesConfig: any[]) {
    this.countries = countriesConfig;
    //console.log(this.countries);
  }

  navigateBack(): void {
    this.router.navigate(['/onboarding/step-1']);
  }

  navigateNext(): void {
    this.router.navigate(['/onboarding/step-3']);
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
