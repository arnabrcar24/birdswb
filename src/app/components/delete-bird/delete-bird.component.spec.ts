import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBirdComponent } from './delete-bird.component';

describe('DeleteBirdComponent', () => {
  let component: DeleteBirdComponent;
  let fixture: ComponentFixture<DeleteBirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteBirdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
