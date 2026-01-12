export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  contactPerson: string; // Could be a real user referenced by id, but for mock data just a name
}
