export interface Appointment {
  id: string;
  clientId: string;
  careType: CareType;
  healthCareProvider: string;
  date: Date;
}

export interface CreateAppointmentDto {
  clientId: string;
  careType: CareType;
  date: Date;
  healthCareProvider: string;
}

export enum CareType {
  primaryCare = 'primaryCare',
  secondaryCare = 'secondaryCare',
  homeCare = 'homeCare',
  emotionalCare = 'emotionalCare',
  physicalCare = 'physicalCare',
  dentalCare = 'dentalCare',
}
