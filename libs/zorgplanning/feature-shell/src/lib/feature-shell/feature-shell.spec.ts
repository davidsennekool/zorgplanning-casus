import { Spectator, createRoutingFactory } from '@ngneat/spectator/jest';
import { FeatureShell } from './feature-shell';

describe('FeatureShell', () => {
  let spectator: Spectator<FeatureShell>;

  const createComponent = createRoutingFactory({
    component: FeatureShell,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create FeatureShell component', () => {
    expect(spectator.component).toBeTruthy();
  });
});
