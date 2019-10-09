import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import {avengers} from '../avengers';
import { AvengerServiceService } from '../avenger-service.service';


@Component({
  selector: 'app-avenger-details',
  templateUrl: './avenger-details.component.html',
  styleUrls: ['./avenger-details.component.css']
})
export class AvengerDetailsComponent implements OnInit {
  avenger; 
  constructor(
    private route: ActivatedRoute, private _avengerService:AvengerServiceService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.avenger = params.get('name');
      console.log(params.get('name'));
      this._avengerService.getDetail(params.get('name')).subscribe(data=>{
        this.avenger=data
        console.log(data);
      }
      );
    });

  }

}
