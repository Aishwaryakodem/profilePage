import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Education} from "../education.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: "app-editEducation",
  templateUrl: "editEducation.component.html"
})
export class EditEducationComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private activeRoute: ActivatedRoute) {
  }

  userId;
  educationId: any;
  userEducation;
  education: Education[] = [];
  degree:any;
  editEducationForm: FormGroup;
  isLoading:boolean = false;
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.userId = localStorage.getItem("id");
      this.educationId = params.get('edId');
      console.log(this.userId)
      this.getEducation(this.userId);
      this.http.get(`http://localhost:8080/showDegree`).subscribe(degreeName=>{
        this.degree=degreeName;
      })
    })
  }

  public getEducation(userId) {
    this.http.get(`http://localhost:8080/showEducation/${userId}`).subscribe(edu => {
      this.userEducation = edu;
      for (let ed of this.userEducation) {
        if (ed.educationId == this.educationId) {
            this.editEducationForm =  new FormGroup({
                'name': new FormControl(ed.name),
                'degreeName': new FormControl(ed.degreeName),
                'startDate': new FormControl(ed.startDate),
                'endDate': new FormControl(ed.endDate),
                'grade': new FormControl(ed.grade)
            });
            console.log(this.editEducationForm.value);
        }
      }
    })
      this.isLoading = true;
  }

  onSubmit( educationId: any) {
    this.editEducationForm.value["educationId"] = educationId;
    console.log(this.editEducationForm.value);
    this.http.post(`http://localhost:8080/updateEducation/${this.userId}`, this.editEducationForm.value).subscribe(exp => {
      this.router.navigate(['/education']);
    })
  }

}
