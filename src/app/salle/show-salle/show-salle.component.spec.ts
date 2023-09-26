import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSalleComponent } from './show-salle.component';

describe('ShowSalleComponent', () => {
  let component: ShowSalleComponent;
  let fixture: ComponentFixture<ShowSalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSalleComponent]
    });
    fixture = TestBed.createComponent(ShowSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
