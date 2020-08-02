import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Author } from "../authors.model";

@Component({
  selector: `author-details`,
  template: `
    <div>
      {{ author.firstName }} {{ author.lastName }}
      <button style="margin-left: 1rem" (click)="select.emit(author)">Select</button>
      <button style="margin-left: 1rem" (click)="delete.emit(author.id)">X</button>
    </div>
  `
})
export class AuthorDetailsComponent {
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();

}
