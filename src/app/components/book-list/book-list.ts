import { Component, input, OnInit } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  bookList = input<Book[]>();
  selectedBook: Book | undefined;

  ngOnInit(): void {

  }

  // selectBook(selectedBook: Book): void {
  //   this.selectedBook = selectedBook;
  // }
}
