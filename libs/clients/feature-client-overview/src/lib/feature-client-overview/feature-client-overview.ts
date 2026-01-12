import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { Client, ClientsService } from '@zorgplanning/clients/data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'lib-feature-client-overview',
  imports: [RouterLink, DatePipe],
  templateUrl: './feature-client-overview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureClientOverview implements OnInit {
  private clientsService = inject(ClientsService);
  private destroyRef = inject(DestroyRef);

  protected clients: Client[] = [];

  public ngOnInit(): void {
    this.clientsService
      .getClients()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((clients) => {
        this.clients = clients;
      });
  }
}
