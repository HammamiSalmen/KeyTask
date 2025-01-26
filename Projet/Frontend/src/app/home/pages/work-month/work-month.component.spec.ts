import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMonthComponent } from './work-month.component';

describe('WorkMonthComponent', () => {
  let component: WorkMonthComponent;
  let fixture: ComponentFixture<WorkMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
