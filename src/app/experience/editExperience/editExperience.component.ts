import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Education} from "../../education/education.model";
import {Experience} from "../experience.model";
import {FormControl, FormGroup} from "@angular/forms";
import {tick} from "@angular/core/testing";

@Component({
  selector: "app-editExperience",
  templateUrl: "editExperience.component.html"
})
export class EditExperienceComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private activeRoute: ActivatedRoute) {
  }

  userId;
  id;
  userExperience;
  experience: Experience[] = [];
  editExpForm:FormGroup;
  locationId;
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.userId = localStorage.getItem("id");
      this.id = params.get('exId');
      this.getExperience(this.userId);
    })
  }

  public getExperience(userId) {
    this.http.get(`http://localhost:8080/showExp/${userId}`).subscribe(exp => {
      console.log(exp)
      this.userExperience = exp;
      for (let ex of this.userExperience) {
        console.log("in get exp", ex);
        if (ex.id == this.id) {
            this.editExpForm =  new FormGroup({
                'title': new FormControl(ex.title),
                'companyName': new FormControl(ex.companyName),
                'yearsOfExp': new FormControl(ex.yearsOfExp),
                'startDate': new FormControl(ex.startDate),
                'endDate': new FormControl(ex.endDate),
                'houseNum': new FormControl(ex.houseNum),
                'street': new FormControl(ex.street),
                'city': new FormControl(ex.city),
                'country': new FormControl(ex.country)
            })

          console.log(this.editExpForm.value);

        }

      }
    })
  }

  onSubmit(id: any, locationId) {
    this.editExpForm.value["id"] = id;
    this.editExpForm.value["locationId"] = locationId;
    console.log("to update",this.editExpForm.value);
    this.http.post(`http://localhost:8080/updateExp/${this.userId}`, this.editExpForm.value).subscribe(exp => {
      this.router.navigate(['/experience']);
    })
  }

}
