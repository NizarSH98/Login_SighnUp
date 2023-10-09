import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
interface UserDetails {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string='';
  email: string='';
  password: string='';

  title = 'Login_SighnUp';

  isActive: boolean = false;

  toggleRegister() {
    this.isActive = true;
  }

  toggleLogin() {
    this.isActive = false;
  }

  constructor(private apiService: ApiService) { }

  register(userDetails:UserDetails) {
    this.apiService.registerUser(userDetails).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        // Add any further actions you want to take upon successful registration
      },
      (error) => {
        console.error('Error registering user', error);
        // Handle error
      }
    );
  }
  
  login(userCredentials: { email: string; password: string }) {
    this.apiService.loginUser(userCredentials).subscribe(
      (response) => {
        console.log('User logged in successfully', response);
        // Add any further actions you want to take upon successful login
      },
      (error) => {
        console.error('Error logging in', error);
        // Handle error
      }
    );
  }

}
