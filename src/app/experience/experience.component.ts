import {Component, OnInit} from "@angular/core";
import {Experience} from "./experience.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Education} from "../education/education.model";

@Component({
  selector: "app-exp",
  templateUrl: "experience.component.html",
  styles: [`
  div{
    padding-left: 30px;
  }`]
})
export class ExperienceComponent implements OnInit{
    userid;
    userExperience;

    experience: Experience [] = [];

    constructor(private http: HttpClient, private activeRoute: ActivatedRoute, private route: Router) {
    }
    ngOnInit(): void {
            this.userid = localStorage.getItem("id");
            this.getExperience(this.userid);
    }

    public getExperience(user){
        this.http.get(`http://localhost:8080/showExp/${user}`).subscribe(exp =>{
            this.userExperience = exp;
            if(this.userExperience.length!=0) {
                for(let expe of this.userExperience) {
                    this.experience.push(new Experience(expe.id,expe.title, expe.companyName, expe.yearsOfExp, expe.startDate, expe.endDate,
                         expe.houseNum, expe.street, expe.city, expe.country, null));
                }
            }
        })
    }
    onSelectAddExp(){
        this.route.navigate(['/addExp']);
    }

    onSelectEditExp(expId){
        this.route.navigate(['/editExp', expId]);
    }

    onSelectDeleteExp(expId) {
      this.route.navigate(['/deleteExp', expId]);
    }
}
