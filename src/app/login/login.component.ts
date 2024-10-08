import { Component,ViewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginDTO } from '../dtos/user/login.dto';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  phoneNumber: string;
  password: string;
  rememberMe: boolean = true;
  constructor(private userService: UserService, private router: Router){
    this.phoneNumber = '';
    this.password = '';
  }
  onPhoneChange(){
    console.log("phone",this.phoneNumber);
    
  }
  login(){
    const message = `phone: ${this.phoneNumber}`+ `password: ${this.password}`;
    const loginDTO: LoginDTO = {
      "phone_number": this.phoneNumber,
      "password": this.password
    }
    this.userService.login(loginDTO).subscribe({
      
      next: (response: any)=> {
        this.router.navigate(['/login']);
      },
      complete:()=>{
      },
      error: (error: any)=> {
        alert(`Cannot login, error: ${error.error}`)
      }
    })
  }
}
