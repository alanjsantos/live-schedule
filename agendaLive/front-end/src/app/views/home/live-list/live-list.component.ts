import { Live } from './../../../shared/models/live.modsl';
import { LiveService } from './../../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevious!: Live[];

  constructor(
    public liverService: LiveService
  ) { }

  ngOnInit(): void {
  }
  getLives(){
    this.liverService.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
      console.log(this.livesPrevious);
      
    })
  }
}
