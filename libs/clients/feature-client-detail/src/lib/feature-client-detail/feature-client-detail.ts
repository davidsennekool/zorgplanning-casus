import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  Appointment,
  ClientAppointmentsService,
} from '@zorgplanning/clients/data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UiFormField } from '@zorgplanning/ui-form-field';
import { FeatureAppointmentTable } from '@zorgplanning/clients/feature-appointment-table';

interface AppointmentForm {
  healthCareProvider: FormControl<string>;
  date: FormControl<Date>;
  careType: FormControl<string>;
}

@Component({
  selector: 'lib-feature-client-detail',
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    UiFormField,
    FeatureAppointmentTable,
  ],
  templateUrl: './feature-client-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureClientDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private clientAppointmentsService = inject(ClientAppointmentsService);
  private destroyRef = inject(DestroyRef);

  protected clientId: string;
  protected appointments: Appointment[] = [];
  protected showAppointmentForm: WritableSignal<boolean> = signal(false);
  protected appointmentForm = new FormGroup<AppointmentForm>({
    healthCareProvider: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    date: new FormControl(new Date(Date.now()), {
      validators: [Validators.required, this.futureDateValidator()],
      nonNullable: true,
    }),
    careType: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

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

  protected toggleAppointmentForm(): void {
    this.showAppointmentForm.update((state) => !state);
  }

  protected createAppointment(): void {
    if (!this.appointmentForm.valid) return;

    const { healthCareProvider, date, careType } =
      this.appointmentForm.controls;

    this.clientAppointmentsService
      .createAppointment({
        clientId: this.clientId,
        careType: careType.value,
        date: date.value,
        healthCareProvider: healthCareProvider.value,
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((appointments) => {
        this.toggleAppointmentForm();
        this.appointments = appointments;
      });
  }

  private futureDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const inputDate = new Date(control.value);
      const today = new Date();

      today.setHours(0, 0, 0, 0);

      if (isNaN(inputDate.getTime())) {
        return { invalidDate: true };
      }

      if (inputDate <= today) {
        return { notFutureDate: true };
      }

      return null;
    };
  }
}
