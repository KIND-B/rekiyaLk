import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantDetailComponent } from './vacant-detail.component';

describe('VacantDetailComponent', () => {
  let component: VacantDetailComponent;
  let fixture: ComponentFixture<VacantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacantDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
