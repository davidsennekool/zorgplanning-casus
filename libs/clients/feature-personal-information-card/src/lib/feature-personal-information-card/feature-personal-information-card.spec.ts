import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePersonalInformationCard } from './feature-personal-information-card';

describe('FeaturePersonalInformationCard', () => {
  let component: FeaturePersonalInformationCard;
  let fixture: ComponentFixture<FeaturePersonalInformationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePersonalInformationCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePersonalInformationCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
