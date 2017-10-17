import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const value = this.loginForm.value;
    if (value.email === 'pragna' && value.password === 'Pragna') {
      this.router.navigateByUrl('dashboard');
    } else if (value.email === 'ipragna' && value.password === 'Pragna') {
      this.router.navigateByUrl('user-profile');
    }
  }
}
