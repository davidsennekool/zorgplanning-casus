import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureAppointmentTable } from './feature-appointment-table';

describe('FeatureAppointmentTable', () => {
  let component: FeatureAppointmentTable;
  let fixture: ComponentFixture<FeatureAppointmentTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAppointmentTable],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureAppointmentTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
