import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { Client, ClientsService } from '@zorgplanning/clients/data-access';
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-feature-client-overview',
  imports: [RouterLink, DatePipe, AsyncPipe],
  templateUrl: './feature-client-overview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureClientOverview {
  private clientsService = inject(ClientsService);

  protected clients$: Observable<Client[]> = this.clientsService.getClients();
}
