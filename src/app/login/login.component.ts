import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common'; 
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  professionals: any[] = [];
  clients: any[] = [];
  availabilities: any[] = [];
  appointments: any[] = [];

  constructor(private dataService: LoginService, private router: Router) {}

  ngOnInit() {
    this.professionals = this.dataService.getProfessionals();
    this.clients = this.dataService.getClients();
    this.availabilities = this.dataService.getAvailabilities();
    this.appointments = this.dataService.getAppointments();
  }
  showHome() {
    this.router.navigate(['/home']); 
  }
}
