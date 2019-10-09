import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
//import { avengers } from '../avengers';
import { AvengerServiceService } from '../avenger-service.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnChanges{
  avengers = [];//avengers;
  
  constructor(private _avengerservice: AvengerServiceService) { }

  ngOnInit() {
    this.avengers= this._avengerservice.getAvengers();
  }

  ngOnChanges(avengers:SimpleChanges){
    console.log(avengers);
  }



}
