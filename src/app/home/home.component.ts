import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  rendezvous: any[] = [];
  constructor(private rendezvousService: LoginService, private router :Router) {}

  ngOnInit() {
    this.rendezvous = this.rendezvousService.getAvailabilities();
  }

  selectRendezvous(rdv: any) {
    alert(`You selected doctor ${rdv.professionalId} on ${rdv.date} at ${rdv.time}`);
    this.router.navigate(['/confirmation']);
   
  }
}

