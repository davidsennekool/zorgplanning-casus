import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'lib-ui-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './ui-navbar.html',
})
export class UiNavbar {
  protected menuItems = [
    {
      label: 'Dashboard',
      url: '/dashboard',
    },
    {
      label: 'Clients',
      url: '/clients',
    },
  ];
}
