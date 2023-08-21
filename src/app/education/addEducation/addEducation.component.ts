import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: "app-addEducation",
  templateUrl: "addEducation.component.html"
})
export class AddEducationComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private activeRoute: ActivatedRoute) {
  }

  userId;
  degree: any;
  educationForm: FormGroup;

  onSubmit() {
    this.http.post(`http://localhost:8080/addEducation/${this.userId}`, this.educationForm.value).subscribe(exp => {
      this.router.navigate(['/education']);
    })
  }

  ngOnInit(): void {

      this.userId = localStorage.getItem("id");

      this.http.get(`http://localhost:8080/showDegree`).subscribe(degreeName=>{
      this.degree=degreeName;
    })
    this.educationForm = new FormGroup({
      'name': new FormControl(null),
      'degreeName': new FormControl(null),
      'startDate': new FormControl(null),
      'endDate': new FormControl(null),
      'grade': new FormControl(null)
    })
  }
}
