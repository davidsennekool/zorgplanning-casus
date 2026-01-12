import { Injectable, signal } from '@angular/core';
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
      date: new Date('2024-02-20T15:30:00'),
      healthCareProvider: 'Zorg Groep Noord',
    },
    {
      id: 'apt_2',
      clientId: '2',
      careType: 'Primary care',
      date: new Date('2024-02-10T12:30:00'),
      healthCareProvider: 'Zorg Groep Noord',
    },
    {
      id: 'apt_3',
      clientId: '1',
      careType: 'Physical therapy',
      date: new Date('2024-01-20T10:00:00'),
      healthCareProvider: 'Zorg Groep Noord',
    },
  ];

  public getClientAppointments(clientId: string): Observable<Appointment[]> {
    return of(this.mockAppointments.filter((val) => val.clientId === clientId));
  }

  public getAppointmentById(id: string): Observable<Appointment> {
    return of(
      this.mockAppointments.filter((appointment) => appointment.id === id)[0],
    );
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
