import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { FeaturePersonalInformationCard } from './feature-personal-information-card';
import { inputBinding, Signal, signal } from '@angular/core';
import { Client } from '@zorgplanning/clients/data-access';

describe('FeaturePersonalInformationCard', () => {
  describe('when client input is provided', () => {
    let spectator: Spectator<FeaturePersonalInformationCard>;
    const mockClient: Signal<Client> = signal({
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      contactPerson: 'Jane Doe',
      dateOfBirth: new Date('1990-02-20'),
      email: 'john.doe@gmail.com',
    });

    const createComponent = createComponentFactory({
      component: FeaturePersonalInformationCard,
      bindings: [inputBinding('client', mockClient)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should have a client information title', () => {
      expect(spectator.query('h2')).toHaveText('Client information');
    });
  });

  describe('when client input is not provided', () => {
    let spectator: Spectator<FeaturePersonalInformationCard>;

    const createComponent = createComponentFactory({
      component: FeaturePersonalInformationCard,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should have an error message', () => {
      expect(spectator.query('#personal-error-message')).toHaveText(
        'Oops, it looks like the personal information is not accessible. Please try again later',
      );
    });
  });
});
