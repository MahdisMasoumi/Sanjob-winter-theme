import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdwinComponent } from './create-adwin.component';

describe('CreateAdwinComponent', () => {
  let component: CreateAdwinComponent;
  let fixture: ComponentFixture<CreateAdwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAdwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAdwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
