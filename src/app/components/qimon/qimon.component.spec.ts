import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QimonComponent } from './qimon.component';

describe('QimonComponent', () => {
  let component: QimonComponent;
  let fixture: ComponentFixture<QimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QimonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
