import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  @ViewChild('iframe') iframe!: ElementRef;

  // Track whether forward navigation is possible
  isForwardAvailable: boolean = false;

  ngOnInit() {
    this.checkForwardHistory();
  }

  // Reload the browser
  reloadBrowser() {
    window.location.reload();
  }

  // Navigate back
  navigateBack() {
    history.back();
    this.checkForwardHistory(); // Recheck forward history after navigating back
  }

  // Navigate forward
  navigateForward() {
    history.forward();
    this.checkForwardHistory(); // Recheck forward history after navigating forward
  }

  // Check if forward navigation is available
  checkForwardHistory() {
    // Check if there is any forward history
    if (window.history.length > 1) {
      this.isForwardAvailable = true;
    } else {
      this.isForwardAvailable = false;
    }
  }

  // Ensure that links in the iframe open inside the iframe
  onIframeLoad() {
    const iframeDoc = this.iframe.nativeElement.contentWindow.document;
    const links = iframeDoc.querySelectorAll('a');

    links.forEach((link: HTMLAnchorElement) => {
      link.target = '_self'; // Make sure links open in the same iframe
    });
  }
}
