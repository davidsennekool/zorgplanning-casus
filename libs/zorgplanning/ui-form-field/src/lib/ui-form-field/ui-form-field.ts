import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-ui-form-field',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './ui-form-field.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFormField {
  @Input({ required: true }) public control!: FormControl;
  public label = input.required<string>();
  public type = input.required<string>();
  public id = input.required<string>();
  public placeholder = input<string>('');
  public required = input<boolean>(false);
}
