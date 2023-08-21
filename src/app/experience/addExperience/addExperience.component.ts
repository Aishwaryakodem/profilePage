import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Form, FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "app-addExperience",
  templateUrl: "addExperience.component.html"
})
export class AddExperienceComponent implements OnInit {
  userId;
  educationForm:FormGroup;
  constructor(private router: Router, private http: HttpClient, private activeRoute: ActivatedRoute) {
  }

  onSubmit() {
    console.log(this.educationForm.value);
    this.http.post(`http://localhost:8080/addExp/${this.userId}`,  this.educationForm.value).subscribe(exp => {
      this.router.navigate(['/experience']);
    });
  }

  ngOnInit(): void {

      this.userId = localStorage.getItem("id");
      this.educationForm =  new FormGroup({
        'title': new FormControl(null),
        'companyName': new FormControl(null),
        'yearsOfExp': new FormControl(null),
        'startDate': new FormControl(null),
        'endDate': new FormControl(null),
        'houseNum': new FormControl(null),
        'street': new FormControl(null),
        'city': new FormControl(null),
        'country': new FormControl(null)
      })
  }
}
