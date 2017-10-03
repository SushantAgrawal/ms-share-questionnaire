import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q1aComponent } from './q1a.component';

describe('Q1aComponent', () => {
  let component: Q1aComponent;
  let fixture: ComponentFixture<Q1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
