import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMotionComponent } from './ng-motion.component';

describe('NgMotionComponent', () => {
  let component: NgMotionComponent;
  let fixture: ComponentFixture<NgMotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
