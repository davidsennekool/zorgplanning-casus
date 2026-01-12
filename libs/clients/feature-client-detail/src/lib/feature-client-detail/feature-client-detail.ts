import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  Appointment,
  CareType,
  ClientAppointmentsService,
} from '@zorgplanning/clients/data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'lib-feature-client-detail',
  imports: [RouterLink, DatePipe],
  templateUrl: './feature-client-detail.html',
})
export class FeatureClientDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private clientAppointmentsService = inject(ClientAppointmentsService);
  private destroyRef = inject(DestroyRef);

  protected clientId: string;
  protected appointments: Appointment[] = [];

  constructor() {
    this.clientId = this.route.snapshot.params['id'];
  }

  public ngOnInit(): void {
    this.clientAppointmentsService
      .getClientAppointments(this.clientId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((appointments) => {
        this.appointments = appointments;
      });
  }

  protected createAppointment(): void {
    this.clientAppointmentsService
      .createAppointment({
        clientId: this.clientId,
        careType: CareType.dentalCare,
        date: new Date('2024-02-20T15:30:00'),
        healthCareProvider: 'Zorg Groep Oost',
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((appointments) => (this.appointments = appointments));
  }
}
