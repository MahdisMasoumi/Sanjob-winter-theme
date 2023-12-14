import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdwinComponent } from './adwin.component';

describe('AdwinComponent', () => {
  let component: AdwinComponent;
  let fixture: ComponentFixture<AdwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
