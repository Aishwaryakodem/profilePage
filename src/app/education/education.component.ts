import {Component, OnInit} from "@angular/core";
import {Education} from "./education.model";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "app-edu",
  templateUrl: "education.component.html",
  styles: [`
  div{
    padding-left: 30px;
  }
  `]

})
export class EducationComponent implements OnInit{
  userid;
  userEducation;
  constructor(private http: HttpClient, private activeRoute: ActivatedRoute, private route: Router) {
  }
  education: Education[] = [];

  ngOnInit(): void {

      this.userid = localStorage.getItem("id");
      this.getEducation(this.userid);
  }

  public getEducation(user){
    this.http.get(`http://localhost:8080/showEducation/${user}`).subscribe(edu =>{
      this.userEducation = edu;
      if(this.userEducation.length!=0) {
        for (let ed of this.userEducation) {
          this.education.push(new Education(ed.educationId, ed.name, ed.degreeName, ed.startDate, ed.endDate, ed.grade));
        }
      }
    })
  }

  onSelectAddEdu(){
    this.route.navigate(['/addEdu']);
  }

  onSelectEditEdu(edu){
    this.route.navigate(['/editEdu', edu]);
  }

  onSelectDeleteEdu(edu: any){
    this.route.navigate(['/deleteEdu', edu]);
  }
}
