import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent implements OnInit {
  @Input() campaigns!: any[];

  ngOnInit(): void {
    
  }
}
