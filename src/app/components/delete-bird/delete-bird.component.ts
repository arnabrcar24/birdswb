import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bird } from '../../type/bird';
import { BirdService } from '../../services/bird.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-bird',
  standalone: true,
  imports: [],
  templateUrl: './delete-bird.component.html',
  styleUrl: './delete-bird.component.scss'
})
export class DeleteBirdComponent {
  constructor(private birdService:BirdService, private router:Router){}
  @Input() bird!:Bird;
  @Output() delEvent = new EventEmitter()
  deleteBirdClose(){
    this.delEvent.emit();
  }
  removeBird(bid:any){
    this.birdService.deleteBird(bid).subscribe({
      next: () => {
        this.deleteBirdClose();
        console.log('The bird is deleted successfully.');
      },
      error: (err) => console.error('Failed to delete bird:', err)
    }); 
  }
}
