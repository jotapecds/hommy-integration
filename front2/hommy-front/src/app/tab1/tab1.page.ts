import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  public republicsArray = [];

  constructor(public searchService: SearchService) {}

  ngOnInit() {
    this.listRepublics();
  }

  listRepublics(){
    this.searchService.getListRepublics().subscribe((res) => {
      this.republicsArray = res;
    });
  }
}

