import {Component, EventEmitter, Output} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: [`
    div{
      background-color: lightsteelblue ;
    }
    div a {
      color: black;
      padding-top: 20px;
      padding-left: 25px;
      padding-bottom: 20px;
      padding-right: 10px;

    }
    li a {
      display: block;
      color: black;
      text-align: center;
      padding: 20px 20px;
    }`

  ]
})
export class HeaderComponent {
  // @Output() eventSelected = new EventEmitter<string>();
  // onSelect(select: string){
  //   this.eventSelected.emit(select);
  // }
  userid;
  isInfoSelected = true;
  constructor(private route: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.userid = localStorage.getItem("id");
  }

  onSelectEducation(){
    this.route.navigate(['/education']);
  }

  onSelectExperience() {
    this.route.navigate(['/experience']);
  }

  onSelectSkills() {
    this.route.navigate(['/skills']);
  }

  onSelectInfo() {
    this.route.navigate(['/info']);
  }
}
