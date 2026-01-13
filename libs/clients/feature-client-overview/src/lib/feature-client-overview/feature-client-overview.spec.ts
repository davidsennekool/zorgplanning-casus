import { Spectator, createRoutingFactory } from '@ngneat/spectator/jest';
import { FeatureClientOverview } from './feature-client-overview';

describe('FeatureClientOverview', () => {
  let spectator: Spectator<FeatureClientOverview>;

  const createComponent = createRoutingFactory({
    component: FeatureClientOverview,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create FeatureClientOverview component', () => {
    expect(spectator.component).toBeTruthy();
  });
});
