import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { UiFormField } from './ui-form-field';
import { FormControl } from '@angular/forms';
import { inputBinding, signal } from '@angular/core';

describe('UiFormField', () => {
  let spectator: Spectator<UiFormField>;
  const createComponent = createComponentFactory({
    component: UiFormField,
    bindings: [
      inputBinding('control', () => new FormControl('')),
      inputBinding('label', () => signal('Test label')),
      inputBinding('type', () => signal('date')),
      inputBinding('id', () => signal('custom-id')),
    ],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create UiFormField component', () => {
    expect(spectator.component).toBeTruthy();
  });
});
