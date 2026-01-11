import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureClientDetail } from './feature-client-detail';

describe('FeatureClientDetail', () => {
  let component: FeatureClientDetail;
  let fixture: ComponentFixture<FeatureClientDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureClientDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureClientDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
