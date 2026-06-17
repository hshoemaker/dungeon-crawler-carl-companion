import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book-service';
import { BookList } from "../book-list/book-list";

@Component({
  selector: 'app-home-page',
  imports: [BookList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  bookService: BookService = inject(BookService);
  books: Book[] = [];

  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
  }
}
