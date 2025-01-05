import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'wallet';

  ngOnInit(): void {    
    this.setStatusBar();
  }

  async setStatusBar() {
    StatusBar.setOverlaysWebView({ overlay: true });
  }
}
