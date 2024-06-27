import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bird } from '../../type/bird';
import { EditBirdComponent } from '../edit-bird/edit-bird.component';
import { Router } from '@angular/router';
import { DeleteBirdComponent } from '../delete-bird/delete-bird.component';

@Component({
  selector: 'app-bird-card',
  standalone: true,
  imports: [EditBirdComponent, DeleteBirdComponent],
  templateUrl: './bird-card.component.html',
  styleUrl: './bird-card.component.scss'
})
export class BirdCardComponent {
  constructor(private router:Router){}
  @Input() bird!:Bird;
  @Output() fetchEvent = new EventEmitter()
  showEditModal = false;
  showdeleteModal = false;
  editBirdToggle(){
    this.showEditModal = !this.showEditModal;
    this.fetchEvent.emit();
  }
  deleteBirdToggle(){;
    this.showdeleteModal = !this.showdeleteModal;
    this.fetchEvent.emit();
  }
}