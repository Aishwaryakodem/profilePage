import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Info} from "../info.model";

@Component({
    selector: "app-editInfo",
    templateUrl: "editInfo.component.html"
})
export class EditInfoComponent implements OnInit{
    userId;
    user;
    info: Info;
    constructor(private activeRoute: ActivatedRoute, private route: Router, private http: HttpClient) {
    }
    ngOnInit(): void {

            this.userId = localStorage.getItem("id");
            this.getUserInfo(this.userId);

    }
    public getUserInfo(user)  {
        this.http.get(`http://localhost:8080/showUser/${user}`).subscribe(userInfo =>{
            this.user = userInfo;
            this.info = new Info(this.user.firstName, this.user.lastName, this.user.email, this.user.phoneNum, this.user.password);
        });
    }
    onSubmit(user, email, pwd){
        user["id"]=this.userId;
        user["email"]=email;
        user["password"]=pwd;
        console.log(user);
        this.http.post(`http://localhost:8080/updateUser/${this.userId}`, user).subscribe(exp => {
            this.route.navigate(['/info']);
        })

    }

}
