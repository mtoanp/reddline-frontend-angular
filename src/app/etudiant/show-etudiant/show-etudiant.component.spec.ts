import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEtudiantComponent } from './show-etudiant.component';

describe('ShowEtudiantComponent', () => {
  let component: ShowEtudiantComponent;
  let fixture: ComponentFixture<ShowEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowEtudiantComponent]
    });
    fixture = TestBed.createComponent(ShowEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
