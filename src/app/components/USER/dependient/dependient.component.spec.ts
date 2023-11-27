import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependientComponent } from './dependient.component';

describe('DependientComponent', () => {
  let component: DependientComponent;
  let fixture: ComponentFixture<DependientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DependientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
