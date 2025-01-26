import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTodayComponent } from './work-today.component';

describe('WorkTodayComponent', () => {
  let component: WorkTodayComponent;
  let fixture: ComponentFixture<WorkTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkTodayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
