import { Component, computed, input, output } from '@angular/core';
import { Appointment } from '@zorgplanning/clients/data-access';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'lib-feature-appointment-table',
  imports: [DatePipe],
  templateUrl: './feature-appointment-table.html',
})
export class FeatureAppointmentTable {
  public appointments = input.required<Appointment[]>();
  public sortAppointmentsByDate = output<'asc' | 'desc'>();

  protected sortingOrder: 'asc' | 'desc' = 'desc';

  protected sortAppointments(): void {
    if (this.sortingOrder === 'desc') {
      this.sortingOrder = 'asc';
    } else {
      this.sortingOrder = 'desc';
    }

    this.sortAppointmentsByDate.emit(this.sortingOrder);
  }
}
