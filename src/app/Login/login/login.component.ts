import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private AuthService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

   onSubmit(){
    if(this.loginForm.valid){
      const { username, password } = this.loginForm.value;
      if(this.AuthService.login(username,password)){
        // alert('Login successful, navigating to users')
        this.router.navigate(['/users']);
        this.loginForm.reset();

      }else{
        alert('Login failed. Por favor revisa tus credenciales.');
        this.loginForm.reset();
      }
    }
   }

  ngOnInit(): void {
  }

}
