import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextVacinnesComponent } from './next-vacinnes.component';

describe('NextVacinnesComponent', () => {
  let component: NextVacinnesComponent;
  let fixture: ComponentFixture<NextVacinnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextVacinnesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextVacinnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
