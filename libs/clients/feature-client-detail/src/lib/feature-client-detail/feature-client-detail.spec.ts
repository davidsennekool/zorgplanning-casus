import { Spectator, createRoutingFactory } from '@ngneat/spectator/jest';
import { FeatureClientDetail } from './feature-client-detail';

describe('FeatureClientDetail', () => {
  let spectator: Spectator<FeatureClientDetail>;

  const createComponent = createRoutingFactory({
    component: FeatureClientDetail,
    shallow: false,
    params: {
      id: '1',
    },
  });

  beforeEach(() => (spectator = createComponent()));

  describe('appointments form visibility', () => {
    it('should not show the create appointment form', () => {
      expect(spectator.query('#appointment-date')).toBeFalsy();
      expect(spectator.query('#appointment-health-care-provider')).toBeFalsy();
      expect(spectator.query('#appointment-care-type')).toBeFalsy();
    });

    it('should show the create appointment form', () => {
      spectator.click('#toggle-appointment-form');
      expect(spectator.query('#appointment-date')).toBeTruthy();
      expect(spectator.query('#appointment-health-care-provider')).toBeTruthy();
      expect(spectator.query('#appointment-care-type')).toBeTruthy();
    });
  });

  describe('form validation', () => {
    beforeEach(() => {
      spectator.component.showAppointmentForm.set(true);
      spectator.detectChanges();
    });

    it('should show validation errors when subbmitting empty form', () => {
      spectator.component.appointmentForm.markAllAsTouched();

      spectator.click('#submit-appointment-form');

      const errorMessages = spectator.queryAll('.error-message');
      expect(errorMessages.length).toBeGreaterThan(0);
    });

    it('should display invalid date error for incorrect date input', () => {
      const dateControl = spectator.component.appointmentForm.controls.date;

      dateControl.markAsTouched();
      dateControl.setValue(new Date('01-01-2024T01:00:00')); // Invalid date
      spectator.detectChanges();

      const dateField = spectator.query('#appointment-date');
      const errorMessage = dateField?.querySelector('.error-message');

      expect(errorMessage).toExist();
      expect(errorMessage).toHaveText('Invalid date format');
    });

    it('should display notFutureDate error for date field when not in future', () => {
      const dateControl = spectator.component.appointmentForm.controls.date;

      dateControl.markAsTouched();
      dateControl.setValue(new Date('2024-01-01T01:00:00'));
      spectator.detectChanges();

      const dateField = spectator.query('#appointment-date');
      const errorMessage = dateField?.querySelector('.error-message');

      expect(errorMessage).toExist();
      expect(errorMessage).toHaveText('Date must be in the future');
    });

    it('should not show errors when all fields are valid', () => {
      spectator.component.appointmentForm.patchValue({
        date: new Date('2028-12-12T01:00:00'),
        healthCareProvider: 'Zorg Groep Noord-Nederland',
        careType: 'Physical therapy',
      });
      spectator.detectChanges();

      const errorMessages = spectator.queryAll('.error-message');
      expect(errorMessages).toHaveLength(0);
    });
  });

  describe('form submission', () => {
    beforeEach(() => {
      spectator.component.showAppointmentForm.set(true);
      spectator.detectChanges();
    });

    it('should not submit form when invalid', () => {
      const createSpy = jest.spyOn(spectator.component, 'createAppointment');

      spectator.click('#submit-appointment-form');

      expect(spectator.component.appointmentForm.invalid).toBe(true);
    });

    it('should not submit form when invalid', () => {
      spectator.click('#submit-appointment-form');

      expect(spectator.component.appointmentForm.invalid).toBe(true);
    });

    it('should call createAppointment when form is valid and submitted', () => {
      const createSpy = jest.spyOn(spectator.component, 'createAppointment');

      spectator.component.appointmentForm.patchValue({
        date: new Date('2028-12-25T01:00:00'),
        healthCareProvider: 'Zorg Groep Noord-Nederland',
        careType: 'Physical therapy',
      });
      spectator.detectChanges();

      spectator.click('#submit-appointment-form');

      expect(createSpy).toHaveBeenCalled();
    });

    it('should call createAppointment when form is valid and submitted', () => {
      const createSpy = jest.spyOn(spectator.component, 'createAppointment');

      spectator.component.appointmentForm.patchValue({
        date: new Date('2028-12-25T01:00:00'),
        healthCareProvider: 'Zorg Groep Noord-Nederland',
        careType: 'Physical therapy',
      });
      spectator.detectChanges();

      spectator.click('#submit-appointment-form');

      expect(createSpy).toHaveBeenCalled();
    });
  });
});
