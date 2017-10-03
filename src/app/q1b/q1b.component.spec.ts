import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q1bComponent } from './q1b.component';

describe('Q1bComponent', () => {
  let component: Q1bComponent;
  let fixture: ComponentFixture<Q1bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q1bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
