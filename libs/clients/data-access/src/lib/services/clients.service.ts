import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private mockClients: Client[] = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      contactPerson: 'Jane Doe',
      dateOfBirth: new Date('1990-02-20'),
      email: 'john.doe@gmail.com',
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Doe',
      contactPerson: 'John Doe',
      dateOfBirth: new Date('1992-02-20'),
      email: 'jane.doe@gmail.com',
    },
  ];

  public getClients(): Observable<Client[]> {
    return of(this.mockClients);
  }
}
