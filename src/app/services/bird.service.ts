import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bird } from '../type/bird';

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  constructor(private http:HttpClient) {}
  getBird(){
    return this.http.get("https://667d5510297972455f64a257.mockapi.io/api/v1/birds")
  }
  addBird(birddata:Bird){
    return this.http.post("https://667d5510297972455f64a257.mockapi.io/api/v1/birds", birddata)
  }
  updateBird(id:any, birddata:Bird){
    return this.http.put<Bird>("https://667d5510297972455f64a257.mockapi.io/api/v1/birds/"+id, birddata)
  }
  deleteBird(id:any){
    return this.http.delete("https://667d5510297972455f64a257.mockapi.io/api/v1/birds/"+id)
  }
}