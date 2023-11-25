import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuneListComponent } from './vacune-list.component';

describe('VacuneListComponent', () => {
  let component: VacuneListComponent;
  let fixture: ComponentFixture<VacuneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacuneListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacuneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
