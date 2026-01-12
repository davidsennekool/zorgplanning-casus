import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Client } from '@zorgplanning/clients/data-access';

@Component({
  selector: 'lib-feature-personal-information-card',
  imports: [DatePipe],
  templateUrl: './feature-personal-information-card.html',
})
export class FeaturePersonalInformationCard {
  public client = input.required<Client | undefined>();
}
