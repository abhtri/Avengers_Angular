import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Avengers } from './avengers';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'http://localhost:4200',
      //'Authorization':'authkey',
      //'userid':'1'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class AvengerServiceService {
    
    private _url: string ="http://localhost:8080/demo/hero";
    
  constructor(private http : HttpClient) { }
  
  getDetail(x) : Observable<Avengers[]>{
      return this.http.get<Avengers[]>(this._url +"/"+x, httpOptions);
      /*return [
        {
            name:x,
            description:x +' is Awesome'
        }];*/
  }

  getAvengers(){
    return [
      {
          name:'Iron Man',
          actor:'Robert Downey Jr'
      },
      {
          name:'Captain America',
          actor:'Steve Rogers'
      },
      {
          name:'Hulk',
          actor:'Mark Ruffalo'
      },
      {
        name:'Thor',
        actor:'Chris Hemsworth'
    },
  
  ];

  }
}
