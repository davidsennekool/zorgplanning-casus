import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiNavbar } from '@zorgplanning/ui-navbar';

@Component({
  selector: 'lib-feature-shell',
  imports: [RouterOutlet, UiNavbar],
  templateUrl: './feature-shell.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureShell {}
