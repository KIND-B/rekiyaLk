import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantPageComponent } from './vacant-page.component';

describe('VacantPageComponent', () => {
  let component: VacantPageComponent;
  let fixture: ComponentFixture<VacantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
