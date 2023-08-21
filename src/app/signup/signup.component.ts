import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: "app-signup",
  templateUrl: "signup.component.html",
    styles:[`
      .full-page{
        background-color: lightsteelblue;
        height: 100vh;
      }
        label{
            font-size: 17px;
        }`]
})
export class SignupComponent implements OnInit{

  signupForm:FormGroup;
  constructor(private http: HttpClient, private route: Router) {
  }
    onSubmit(){
       console.log(this.signupForm.value);

           this.http.post('http://localhost:8080/addUser', this.signupForm.value).subscribe(response => {
                   alert("successfully Registered");
                   this.route.navigate(['/']);
               },
               error => {
                   alert("User already exists");
               })
    }

  ngOnInit(): void {
    this.signupForm =  new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.maxLength(5)]),
      'phoneNum': new FormControl(null)

    })
  }

}
