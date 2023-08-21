import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Form} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: "app-deleteSkill",
    template: ``
})
export class DeleteSkillComponent implements OnInit {
    constructor(private router: Router, private http: HttpClient, private activeRoute: ActivatedRoute) {
    }
    userId;
    skillId;

    onSubmit(id: any) {
        this.skillId=id;
        console.log({id});
        this.http.post(`http://localhost:8080/deleteSkill/${this.userId}`, {id}).subscribe(exp => {
            this.router.navigate(['/skills']);
        })
    }

    ngOnInit(): void {
        this.activeRoute.paramMap.subscribe(params => {
            this.userId = localStorage.getItem("id");
            this.onSubmit(params.get('sId'));
        })
    }
}
