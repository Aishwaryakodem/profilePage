import {Component, OnInit, Output} from "@angular/core";
import {InfoComponent} from "../info/info.component";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Info} from "../info/info.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector:"app-login",
  templateUrl:"login.component.html",
  styles: [`
    .full-page{
      background-color: lightsteelblue;
      height: 100vh;
    }

    label{
      font-size: 17px;
    }
    a{
      font-size: 15px;
      color: darkblue;
      text-decoration-color: whitesmoke;
    }
  `]
})
export class LoginComponent implements OnInit{
  user: any;

  loginForm: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
  }
    onSubmit(){
    console.log(this.loginForm.get('email'));
    this.http.post('http://localhost:8080/login', this.loginForm.value).subscribe(responseData =>{
        this.user = responseData;
        localStorage.setItem("id",this.user.id);
        this.router.navigate(['/info']);
      },
      error => {
      alert("Invalid email or password");
      })
  }

  ngOnInit() {
    this.loginForm =  new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }
}
