import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent{

  constructor(private router: Router) {}

  checkConfirmation(confirmationText: string) {
    if (confirmationText === '200') {
      alert('CONFIRMED');
      // this.router.navigate(['/acceil']); 
    } else {
      this.router.navigate(['/home']); 
    }
  }
}
