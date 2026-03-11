import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

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

  constructor(private authService: AuthService) {}

  signup() {

    const payload = {
      displayName: this.nameFirst + " " + this.nameLast,
      email: this.email,
      password: this.password
    };

    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    this.authService.signup(payload).subscribe({
      next: (response) => {
        console.log("Signup success", response);
      },
      error: (err) => {
        console.error("Signup failed", err);
      }
    });

  }
}
