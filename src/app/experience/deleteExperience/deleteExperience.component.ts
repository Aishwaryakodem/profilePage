import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Form} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "app-deleteExperience",
  template: ``
})
export class DeleteExperienceComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private activeRoute: ActivatedRoute) {
  }

  userId;

  onSubmit(id: any) {
    console.log("inside onsubmit in experience");
    this.http.post(`http://localhost:8080/deleteExp/${this.userId}`, {id}).subscribe(exp => {
      this.router.navigate(['/experience']);
    })
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.userId = localStorage.getItem("id");
      this.onSubmit(params.get('exId'));
    })
  }
}
