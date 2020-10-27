import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import  *  as  data  from  './config/supressionlist.json';
import * as queueData from './config/processingQueue.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit {
  title = 'app';
  suppressionListData: any;
  filteredSupressionData: any // table display on Html
  active = 2;
  pageSize = 4;
  page = 1
  searchText: string // Text which we want to filter
  processingQueueData:any
  constructor() {

  }

  ngOnInit() {
    let supressionListData: any = data;
    this.suppressionListData = supressionListData.default;
    this.filteredSupressionData = this.suppressionListData;

    let processingQueueData: any = queueData
    this.processingQueueData = processingQueueData.default
    
  }

  //Filter Data by Supression List Name and Last Modified by
  filterSupressionListData() {
    this.filteredSupressionData = this.suppressionListData.filter((item)=>{
      return item.supressionListName.toLowerCase().includes(this.searchText.toLowerCase()) || item.lastModifiedBy.toLowerCase().includes(this.searchText.toLowerCase())
    })
  }
}
