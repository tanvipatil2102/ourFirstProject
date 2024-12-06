import { Component } from "@angular/core";



@Component({
    selector : "app-list",
    templateUrl : "./list.component.html",
    styleUrls : ["./list.component.scss"]
})


export class listComponent{
    skills = ["HTML 5", "CSS 3", "JavaScript", "TypeScript", "Angular"]
}