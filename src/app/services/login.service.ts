import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
   professionals = [
    { id: 1, name: 'Dr. Alice', specialty: 'Dermatologist' },
    { id: 2, name: 'Dr. Bob', specialty: 'Dentist' },
  ];

  clients = [
    { id: 1, name: 'John Doe', contact: 'john@example.com' },
    { id: 2, name: 'Jane Smith', contact: 'jane@example.com' },
  ];

  availabilities = [
    { id: 1, professionalId: 1, date: '2024-12-02', time: '10:00 AM' },
    { id: 2, professionalId: 2, date: '2024-12-03', time: '02:00 PM' },
  ];

  appointments = [
    {
      id: 1,
      professionalId: 1,
      clientId: 1,
      availabilityId: 1,
      date: '2024-12-02',
      time: '10:00 AM',
    },
    {
      id: 2,
      professionalId: 2,
      clientId: 2,
      availabilityId: 2,
      date: '2024-12-03',
      time: '02:00 PM',
    },
  ];

  // Methods to fetch data
  getProfessionals() {
    return this.professionals;
  }

  getClients() {
    return this.clients;
  }

  getAvailabilities() {
    return this.availabilities;
  }

  getAppointments() {
    return this.appointments;
  }
}
