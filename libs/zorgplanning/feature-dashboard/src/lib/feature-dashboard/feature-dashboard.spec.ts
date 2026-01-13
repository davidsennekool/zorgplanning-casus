import { Spectator, createRoutingFactory } from '@ngneat/spectator/jest';
import { FeatureDashboard } from './feature-dashboard';

describe('FeatureDashboard', () => {
  let spectator: Spectator<FeatureDashboard>;

  const createComponent = createRoutingFactory({
    component: FeatureDashboard,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create FeatureDashboard component', () => {
    expect(spectator.component).toBeTruthy();
  });
});
