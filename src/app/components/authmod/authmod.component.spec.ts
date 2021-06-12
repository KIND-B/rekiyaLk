import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmodComponent } from './authmod.component';

describe('AuthmodComponent', () => {
  let component: AuthmodComponent;
  let fixture: ComponentFixture<AuthmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthmodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
