import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment, CreateAppointmentDto } from '../models/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class ClientAppointmentsService {
  private mockAppointments: Appointment[] = [
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
    {
      id: 'apt_3',
      clientId: '1',
      careType: 'Physical therapy',
      date: new Date('2026-01-20T01:00:00'),
      healthCareProvider: 'Zorg Groep Noord',
    },
  ];

  public getClientAppointments(clientId: string): Observable<Appointment[]> {
    return of(this.mockAppointments.filter((val) => val.clientId === clientId));
  }

  public createAppointment(
    appointment: CreateAppointmentDto,
  ): Observable<Appointment[]> {
    const newAppointment: Appointment = {
      id: `apt-${Date.now().toString()}`,
      ...appointment,
    };
    this.mockAppointments = [newAppointment, ...this.mockAppointments];

    return this.getClientAppointments(appointment.clientId);
  }
}
