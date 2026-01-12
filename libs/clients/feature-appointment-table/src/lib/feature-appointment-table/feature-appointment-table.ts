import { Component, input } from '@angular/core';
import { Appointment } from '@zorgplanning/clients/data-access';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'lib-feature-appointment-table',
  imports: [DatePipe],
  templateUrl: './feature-appointment-table.html',
})
export class FeatureAppointmentTable {
  public appointments = input.required<Appointment[]>();
}
