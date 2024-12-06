import { Component } from "@angular/core";




@Component({
    selector : "app-student",
    templateUrl : "./student.component.html",
    styleUrls : ["./student.component.scss"]
})




export class studentComponent{
    students = [
        {
            fname : "Jhon",
            lname : "Doe",
            email : "jd@gmail.com",
            contact : 1234567890
        },
        {
            fname : "Jen",
            lname : "Doe",
            email : "jd@gmail.com",
            contact : 2345678901
        },
        {
            fname : "May",
            lname : "Doe",
            email : "md@gmail.com",
            contact : 3456789012
        }
    ]
}