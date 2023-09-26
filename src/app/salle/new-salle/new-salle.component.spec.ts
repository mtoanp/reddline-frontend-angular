import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalleComponent } from './new-salle.component';

describe('NewSalleComponent', () => {
  let component: NewSalleComponent;
  let fixture: ComponentFixture<NewSalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSalleComponent]
    });
    fixture = TestBed.createComponent(NewSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
