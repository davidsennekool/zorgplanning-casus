import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { FeatureAppointmentTable } from './feature-appointment-table';
import { FormControl } from '@angular/forms';
import { inputBinding, signal } from '@angular/core';
import { Appointment } from '@zorgplanning/clients/data-access';

describe('FeatureAppointmentTable', () => {
  let spectator: Spectator<FeatureAppointmentTable>;
  const appointments: Appointment[] = [
    {
      id: 'apt_1',
      clientId: '1',
      careType: 'Dental care',
      date: new Date('2026-02-20T01:00:00'),
      healthCareProvider: 'Zorg Groep Noord',
    },
    {
      id: 'apt_2',
      clientId: '2',
      careType: 'Primary care',
      date: new Date('2026-02-10T01:00:00'),
      healthCareProvider: 'Zorg Groep Noord',
    },
  ];

  const createComponent = createComponentFactory({
    component: FeatureAppointmentTable,
    bindings: [inputBinding('appointments', () => appointments)],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create FeatureAppointmentTable component', () => {
    expect(spectator.component).toBeTruthy();
  });
});
