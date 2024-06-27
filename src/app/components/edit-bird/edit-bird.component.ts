import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bird } from '../../type/bird';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BirdService } from '../../services/bird.service';

@Component({
  selector: 'app-edit-bird',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-bird.component.html',
  styleUrl: './edit-bird.component.scss'
})
export class EditBirdComponent {
  birds:any = []
  categories:any = [];
  constructor(private birdService:BirdService, private router:Router){}
  @Input() bird!:Bird;
  @Output() neEvent = new EventEmitter()
  ngOnInit(){
    this.birdService.getBird().subscribe((data)=>{
    this.birds = data;
    this.birds.forEach((bird:any) => {
      const category = bird.category;
      if (!this.categories.includes(category)) {
          this.categories.push(category);
      }
  });
    }); 
    this.editBirdForm.patchValue(this.bird)
  }

  birdname = new FormControl("", [
    Validators.required,
    Validators.minLength(2)
  ])
  birdpic = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ])
  birdsize = new FormControl("", [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  season = new FormControl("", [Validators.required])
  category = new FormControl("", [Validators.required])
  birdgender = new FormControl("", [])

  editBirdForm = new FormGroup({
    name:this.birdname,
    image:this.birdpic,
    size:this.birdsize,
    season:this.season,
    gender:this.birdgender,
    category:this.category
  })

  updateBird(){
    this.birdService.updateBird(this.bird.id, this.editBirdForm.value as Bird).subscribe({
      next: () => {
        this.editBirdClose();
        console.log('The details are updated successfully.');
      },
      error: (err) => console.error('Failed to update details:', err)
    });
  }

  editBirdClose(){
    this.neEvent.emit();
  }
}
