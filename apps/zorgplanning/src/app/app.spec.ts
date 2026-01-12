import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { App } from './app';

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
