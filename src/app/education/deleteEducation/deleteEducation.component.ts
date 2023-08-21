import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Form} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "app-deleteEducation",
  template: ``
})
export class DeleteEducationComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private activeRoute: ActivatedRoute) {
  }

  userId;

  onSubmit(educationId: any) {
    console.log("inside onsubmit");
    this.http.post(`http://localhost:8080/deleteEducation/${this.userId}`, {educationId}).subscribe(exp => {
      this.router.navigate(['/education']);
    })
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.userId = localStorage.getItem("id");
      this.onSubmit(params.get('edId'));
    })
  }
}
