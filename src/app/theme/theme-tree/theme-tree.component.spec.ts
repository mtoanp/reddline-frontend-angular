import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeTreeComponent } from './theme-tree.component';

describe('ThemeTreeComponent', () => {
  let component: ThemeTreeComponent;
  let fixture: ComponentFixture<ThemeTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeTreeComponent]
    });
    fixture = TestBed.createComponent(ThemeTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
