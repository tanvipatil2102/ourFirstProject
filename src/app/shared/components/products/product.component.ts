import { Component } from "@angular/core";

@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]
})

export class productComponent{
    products = ["Samsung", "Redmi", "Realme", "Motorolla", "Nokia", "Oppo", "Vivo"]
}