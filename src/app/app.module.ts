import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { listComponent } from './shared/components/lists/list.component';
import { productComponent } from './shared/components/products/product.component';
import { fruitComponent } from './shared/components/fruits/fruit.component';
import { movieComponent } from './shared/components/movies/movie.component';
import { studentComponent } from './shared/components/students/student.component';

@NgModule({
  declarations: [
    AppComponent,
    listComponent,
    productComponent,
    fruitComponent,
    movieComponent,
    studentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
