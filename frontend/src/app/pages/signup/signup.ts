import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  nameFirst = '';
  nameLast = '';
  email = '';
  password = '';
  confirmPassword = '';

  signup() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signing up with email:", this.email);
  }
}
