import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureClientOverview } from './feature-client-overview';

describe('FeatureClientOverview', () => {
  let component: FeatureClientOverview;
  let fixture: ComponentFixture<FeatureClientOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureClientOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureClientOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
