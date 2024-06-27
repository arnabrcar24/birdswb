import { Component } from '@angular/core';
import { BirdCardComponent } from '../bird-card/bird-card.component';
import { BirdService } from '../../services/bird.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BirdCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private birdService:BirdService){}
  ngOnInit(){
    this.fetchbBirdData()
  }
  birds:any = [];
  sameCatBirds:any = {};
  fetchbBirdData(){
    this.birdService.getBird().subscribe((data)=>{
      this.birds = data;
    this.birdsByCategory();
      }); 
  }
  birdsByCategory(){
    this.sameCatBirds = this.birds.reduce((catobj:any, bird:any) => {
      if (!catobj[bird.category]) {
        catobj[bird.category] = [];
      }
      catobj[bird.category].push(bird);
      return catobj;
    }, {});
  }
  groupedBirdKeys(){
    return Object.keys(this.sameCatBirds).sort();
  }
}