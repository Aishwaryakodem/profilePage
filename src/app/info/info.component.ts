import {Component, Injectable, Input, OnInit} from "@angular/core";
import {Info} from "./info.model";
import {HttpClient} from "@angular/common/http";
import {LoginComponent} from "../login/login.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-info",
  templateUrl: "info.component.html",
  styles: [`
  div{
    padding-left: 30px;
  }`],
  providers: [LoginComponent]
})

export class InfoComponent implements OnInit{
  info: Info[];
  userid;
  user;

  constructor(private http: HttpClient, private router: Router) {
  }

  public getUserInfo(user)  {
    this.http.get(`http://localhost:8080/showUser/${user}`).subscribe(userInfo =>{
      this.user = userInfo;
      this.info = [new Info(this.user.firstName, this.user.lastName, this.user.email, this.user.phoneNum, this.user.password)]
    });
  }

  ngOnInit(): void {
      this.userid = localStorage.getItem("id");

      this.getUserInfo(this.userid);
  }

  onSelectEdit(){
    this.router.navigate(['/editInfo']);
  }
}
