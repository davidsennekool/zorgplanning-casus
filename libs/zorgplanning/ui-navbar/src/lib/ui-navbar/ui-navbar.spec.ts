import {
  Spectator,
  createComponentFactory,
  createRoutingFactory,
} from '@ngneat/spectator/jest';
import { UiNavbar } from './ui-navbar';

describe('UiNavbar', () => {
  let spectator: Spectator<UiNavbar>;

  const createComponent = createRoutingFactory({
    component: UiNavbar,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should have a navbar title', () => {
    expect(spectator.query('#navbar-title')).toHaveText('Zorgplanning casus');
  });

  it('should have two menu items', () => {
    expect(spectator.queryAll('#navbar-menu-items a')).toHaveLength(2);
  });

  it('should have href on each menu item', () => {
    spectator.queryAll('#navbar-menu-items a').forEach((menuItem) => {
      expect(menuItem).toHaveAttribute('href');
    });
  });
});
