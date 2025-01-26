import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkYearComponent } from './work-year.component';

describe('WorkYearComponent', () => {
  let component: WorkYearComponent;
  let fixture: ComponentFixture<WorkYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
