import { Component } from "@angular/core";






@Component({
    selector : "app-movie",
    templateUrl : "./movie.component.html",
    styleUrls : ["./movie.component.scss"]
})


export class movieComponent{
    movies = ["Baghban", "Tare Zameen Par", "Bahubali", "Bhool Bhulaiya"]
}