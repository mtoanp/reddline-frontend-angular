import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCandidatureComponent } from './new-candidature.component';

describe('NewCandidatureComponent', () => {
  let component: NewCandidatureComponent;
  let fixture: ComponentFixture<NewCandidatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCandidatureComponent]
    });
    fixture = TestBed.createComponent(NewCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
