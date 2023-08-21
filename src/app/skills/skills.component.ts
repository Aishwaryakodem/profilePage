import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: "app-skill",
  templateUrl: "skills.component.html",
  styles: [`
  div {
    padding-left: 30px;
  }`]
})
export class SkillsComponent implements OnInit {
  skills;
  userId;
  userskill;
  userSkills= [];
  i;

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {

      this.userId = localStorage.getItem("id");
      this.getSkills(this.userId);


    this.http.get(`http://localhost:8080/showSkillType`).subscribe(skill => {
      this.skills = skill;
    })
  }

  onSelect(name) {
    name["userId"] = this.userId;
    console.log(name);
    this.http.post(`http://localhost:8080/addSkill`, name).subscribe(userskill => {
      this.getSkills(this.userId);
    })
  }

  getSkills(user) {
    this.http.get(`http://localhost:8080/showSkill/${user}`).subscribe(userskill => {
      this.userskill = userskill;
      this.userSkills = [];
      this.i=1;
      for(let s of this.userskill){
          s["num"]=this.i;
        this.userSkills.push(s);
        this.i+=1;
      }
    })
  }

  onSelectDeleteSkill(sId){
    this.route.navigate(['/deleteSkill', sId]);
  }
}
