import { Component } from "@angular/core";
import { authors } from "../authors.model";

@Component({
  selector: `author-list`,
  template: `
    <author-details
      *ngFor="let author of authors"
      [author]="author"
    ></author-details>
  `
})
export class AuthorListComponent {
  author = authors;
}
