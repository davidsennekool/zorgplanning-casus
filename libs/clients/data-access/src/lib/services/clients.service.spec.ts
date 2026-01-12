import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { ClientsService } from './clients.service';

describe('AuthService', () => {
  let spectator: SpectatorService<ClientsService>;
  const createService = createServiceFactory(ClientsService);

  beforeEach(() => (spectator = createService()));

  describe('getClients', () => {
    it('should return all clients', (done) => {
      const clientId = '1';
      spectator.service.getClients().subscribe((clients) => {
        expect(clients.length).toBe(2);
        expect(
          clients.filter((client) => client.id === clientId)[0].email,
        ).toBe('john.doe@gmail.com');
        done();
      });
    });
  });

  describe('getClientById', () => {
    it('should return the correct client', (done) => {
      const clientId = '2';
      spectator.service.getClientById(clientId).subscribe((client) => {
        expect(client.email).toBe('jane.doe@gmail.com');
        done();
      });
    });
  });
});
