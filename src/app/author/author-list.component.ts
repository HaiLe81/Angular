import { Component } from "@angular/core";
import { authors, Author } from "../authors.model";

@Component({
  selector: `author-list`,
  template: `
    <author-details
      *ngFor="let author of authors"
      [author]="author"
      (select)="onSelected($event)" (delete)="onDelete($event)"
    ></author-details>
    <div>
      Current selected author: {{ currentAuthor?.firstName }}
      {{ currentAuthor?.lastName }}
    </div>
  `
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }
  onDelete(idAuthor: number){
    this.authors = this.authors.filter(author => {
      return author.id !== idAuthor;
    })
    if(this.currentAuthor.id === idAuthor){
      this.currentAuthor = this.authors[0];
    }
  }
}
