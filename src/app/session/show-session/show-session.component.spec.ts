import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSessionComponent } from './show-session.component';

describe('ShowSessionComponent', () => {
  let component: ShowSessionComponent;
  let fixture: ComponentFixture<ShowSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSessionComponent]
    });
    fixture = TestBed.createComponent(ShowSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
