import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { ClientAppointmentsService } from './client-appointments.service';
import { CreateAppointmentDto } from '../models/appointment.model';

describe('AuthService', () => {
  let spectator: SpectatorService<ClientAppointmentsService>;
  const createService = createServiceFactory(ClientAppointmentsService);
  const appointment: CreateAppointmentDto = {
    clientId: '2',
    careType: 'Dental care',
    date: new Date('2026-05-20T01:00:00'),
    healthCareProvider: 'Wijkzorg Comfort B.V.',
  };

  beforeEach(() => (spectator = createService()));

  describe('getClientAppointments', () => {
    it('should return appointments for a specific client', (done) => {
      const clientId = '1';

      spectator.service
        .getClientAppointments(clientId)
        .subscribe((appointments) => {
          expect(appointments.length).toBe(2);
          expect(
            appointments.every(
              (appointment) => appointment.clientId === clientId,
            ),
          ).toBeTruthy();
          done();
        });
    });
  });

  describe('createAppointment', () => {
    it('should create an appointment for a specific client and return all client filtered appointments', (done) => {
      spectator.service
        .createAppointment(appointment)
        .subscribe((appointments) => {
          expect(appointments.length).toBe(2);
          done();
        });
    });
  });
});
