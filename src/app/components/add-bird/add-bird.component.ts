import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BirdService } from '../../services/bird.service';
import { Bird } from '../../type/bird';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bird',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-bird.component.html',
  styleUrl: './add-bird.component.scss'
})
export class AddBirdComponent {
  constructor(private birdService:BirdService, private router:Router){}
  @Output() nEvent = new EventEmitter()
  addBirdClose(){
    this.nEvent.emit()
  }
  birds:any = [];
  categories:any = [];
  ngOnInit(){
    this.birdService.getBird().subscribe((data)=>{
    this.birds = data;
    this.birds.forEach((bird:any) => {
      const category = bird.category;
      if (!this.categories.includes(category)) {
          this.categories.push(category)
        }
      });
    });
  }

  birdname = new FormControl("", [Validators.required, Validators.minLength(2)])
  birdpic = new FormControl("", [Validators.required, Validators.minLength(4)])
  birdsize = new FormControl("", [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  season = new FormControl("", [Validators.required])
  category = new FormControl("", [Validators.required])
  birdgender = new FormControl("", [])

  addBirdForm = new FormGroup({
    name:this.birdname,
    image:this.birdpic,
    size:this.birdsize,
    season:this.season,
    gender:this.birdgender,
    category:this.category
  })
  addNewBird(){
    this.birdService.addBird(this.addBirdForm.value as Bird).subscribe({
      next: () => {
        this.addBirdClose();
        this.router.navigate(['/welcome']);
        console.log('New bird is added successfully.');
      },
      error: (err) => console.error('Failed to add bird:', err)
    });
  }
}
