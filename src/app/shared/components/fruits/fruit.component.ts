import { Component } from "@angular/core";



@Component({
    selector : "app-fruit",
    templateUrl : "./fruit.component.html",
    styleUrls : ["./fruit.component.scss"]
})

export class fruitComponent{
    fruits = ["Mango", "Grapes", "Apple", "Orange", "Banana"]
}