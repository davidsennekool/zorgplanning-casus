export interface Appointment {
  id: string;
  clientId: string;
  careType: string;
  healthCareProvider: string;
  date: Date;
}

export interface CreateAppointmentDto {
  clientId: string;
  careType: string;
  date: Date;
  healthCareProvider: string;
}
