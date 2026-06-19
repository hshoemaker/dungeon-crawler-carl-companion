import { Component, input, OnInit, output } from '@angular/core';
import { Book, Chapter } from '../../models/book';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  bookList = input<Book[]>();
  selectedBook: Book | undefined;

  onSelectChapter = output<Chapter>();
  onSelectBook = output<Book>();

  ngOnInit(): void {

  }

  selectBook(book: Book): void {
    this.selectedBook = book;
    this.onSelectBook.emit(book);
  }

  selectChapter(chapter: Chapter): void {
    this.onSelectChapter.emit(chapter);
  }

  // selectBook(selectedBook: Book): void {
  //   this.selectedBook = selectedBook;
  // }
}
