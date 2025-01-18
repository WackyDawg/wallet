import { Component } from '@angular/core';
import { Share } from '@capacitor/share';


@Component({
  selector: 'app-my-qr',
  templateUrl: './my-qr.component.html',
  styleUrl: './my-qr.component.css'
})
export class MyQrComponent {
  // QR code data
  phoneNumber: string = '+1234567890';

  copyToClipboard() {
    navigator.clipboard.writeText(this.phoneNumber).then(() => {
      console.log('Number copied to clipboard:', this.phoneNumber);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

   shareContent() {
    Share.share({
      text: this.phoneNumber,
      url: 'https://example.com',
      dialogTitle: 'Share with your friends',
    });
  }
  
}
