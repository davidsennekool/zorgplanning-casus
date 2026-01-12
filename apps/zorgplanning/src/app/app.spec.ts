import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { App } from './app';
import { inputBinding, Signal, signal } from '@angular/core';
import { Client } from '@zorgplanning/clients/data-access';

describe('App', () => {
  let spectator: Spectator<App>;

  const createComponent = createComponentFactory({
    component: App,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should have a router-outlet rendered', () => {
    expect(spectator.query('router-outlet')).toExist();
  });
});
