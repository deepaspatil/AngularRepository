import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSCSComponent } from './bscs.component';

describe('BSCSComponent', () => {
  let component: BSCSComponent;
  let fixture: ComponentFixture<BSCSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BSCSComponent]
    });
    fixture = TestBed.createComponent(BSCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
