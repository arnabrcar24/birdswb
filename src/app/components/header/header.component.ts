import { Component } from '@angular/core';
import { AddBirdComponent } from '../add-bird/add-bird.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AddBirdComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router:Router){}
  showAddModal = false;
  addBird(){
    this.router.navigate(['/']);
    this.showAddModal = !this.showAddModal;
  }
}
