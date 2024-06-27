import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bird } from '../type/bird';

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  constructor(private http:HttpClient) {}
  getBird(){
    return this.http.get("http://localhost:3000/birds")
  }
  addBird(birddata:Bird){
    return this.http.post("http://localhost:3000/birds", birddata)
  }
  updateBird(id:any, birddata:Bird){
    return this.http.put<Bird>("http://localhost:3000/birds/"+id, birddata)
  }
  deleteBird(id:any){
    return this.http.delete("http://localhost:3000/birds/"+id)
  }
}