import { Component, Input } from "@angular/core";
import { Author } from "../authors.model";

@Component({
  selector: `author-details`,
  template: `
    <div>
      {{ author.firstName }}
    </div>
  `
})
export class AuthorDetailsComponent {
  @Input() author: Author;
}
